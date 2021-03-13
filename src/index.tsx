import React, {
  useState,
  useEffect,
  FC,
  HTMLAttributes,
  ReactChild,
} from 'react';

import './styles/raptorize.css';
import raptor from './assets/images/raptor.png';
import sound1 from './assets/sounds/raptor.mp3';
import sound2 from './assets/sounds/raptor.ogg';  // backup

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
const defaults = {
  audioPath: [sound1, sound2],
  imagePath: raptor,

  soundDelay: 500,
  sound: true,
  repeat: true,
  code: false,
  disabled: false,
};

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Raptorize: FC<Props> = props => {
  const [index, setIndex] = useState(0);

  const init = (options: any) => {
    const audioTemplate = document.createElement('audio');
    audioTemplate.className =
      options.className + '-source asset-' + options.uniqid;

    for (var source in options.audioPath) {
      const sourceAudioTemplate = document.createElement('source');
      sourceAudioTemplate.src = options.audioPath[source];
      audioTemplate.appendChild(sourceAudioTemplate);
    }

    const imageTemplate = document.createElement('img');
    imageTemplate.className = options.className + ' asset-' + options.uniqid;
    imageTemplate.src = raptor;

    const audio = document.body.appendChild(audioTemplate);
    const image = document.body.appendChild(imageTemplate);
    image.style.display = 'none';

    function go() {
      if (options.sound) {
        setTimeout(() => audio.play(), options.soundDelay);
      }

      image.style.display = 'block';
      image.classList.add(options.className + '-go');

      // Remove the animation and the added elements after 5 seconds
      setTimeout(() => {
        image.classList.remove(options.className + '-go');
        const assets = document.getElementsByClassName(
          'asset-' + options.uniqid
        );
        while (assets[0]) {
          assets[0]?.parentNode?.removeChild(assets[0]);
        }
      }, 5000);
    }

    return { go: go };
  };

  const options = {
    ...defaults,
    ...props,
    className: 'raptor',
    uniqid: Date.now(),
  };

  useEffect(() => {
    if (options.disabled) return;

    const validateKonami = ({ keyCode }: { keyCode: number }) => {
      if (keyCode === 65 && index > 8 && options.repeat) setIndex(index + 1);
      else if (keyCode === konamiCode[index]) setIndex(index + 1);
      else setIndex(0);
    };

    document.addEventListener('keydown', validateKonami);
    return () => document.removeEventListener('keydown', validateKonami);
  }, [options.disabled, options.repeat, index]);

  // Magic Time 🦕🦖
  if (index >= konamiCode.length) init(options).go();

  return <>{options.code && <div>↑ ↑ ↓ ↓ ← → ← → B A</div>}</>;
};