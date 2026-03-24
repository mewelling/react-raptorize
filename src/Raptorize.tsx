import React, { useEffect, useState } from 'react';
import { ensureRaptorStyles } from './injectRaptorStyles';
import raptor from './assets/images/raptor.png';
import sound1 from './assets/sounds/raptor.mp3';
import sound2 from './assets/sounds/raptor.ogg';  // backup

const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

/** keyCode for Konami checks; user-event / some environments omit legacy keyCode on keydown. */
function konamiKeyCode(e: KeyboardEvent): number {
  if (typeof e.keyCode === 'number' && e.keyCode !== 0) return e.keyCode;
  switch (e.key) {
    case 'ArrowUp':
      return 38;
    case 'ArrowDown':
      return 40;
    case 'ArrowLeft':
      return 37;
    case 'ArrowRight':
      return 39;
    case 'b':
    case 'B':
      return 66;
    case 'a':
    case 'A':
      return 65;
    default:
      break;
  }
  switch (e.code) {
    case 'ArrowUp':
      return 38;
    case 'ArrowDown':
      return 40;
    case 'ArrowLeft':
      return 37;
    case 'ArrowRight':
      return 39;
    case 'KeyB':
      return 66;
    case 'KeyA':
      return 65;
    default:
      return 0;
  }
}
const defaults = {
  audioPath: [sound1, sound2],
  imagePath: raptor,

  soundDelay: 500,
  sound: true,
  repeat: true,
  code: false,
  disabled: false,
};

interface RaptorizeProps {
  code?: boolean;
  disabled?: boolean;
  repeat?: boolean;
  sound?: boolean;
  soundDelay?: number;
  imagePath?: string;
  audioPath?: string[];
}

interface RaptorizeInitOptions extends RaptorizeProps {
  className: string;
  uniqid: number;
}

const init = (options: RaptorizeInitOptions) => {
  const audioTemplate = document.createElement('audio');
  audioTemplate.className = options.className + '-source asset-' + options.uniqid;

  for (let source of options.audioPath || []) {
    const sourceAudioTemplate = document.createElement('source');
    sourceAudioTemplate.src = source
    audioTemplate.appendChild(sourceAudioTemplate);
  }

  const imageTemplate = document.createElement('img');
  imageTemplate.className = options.className + ' asset-' + options.uniqid;
  imageTemplate.src = raptor;
  imageTemplate.alt = 'raptor';

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
      const assets = document.getElementsByClassName('asset-' + options.uniqid);
      while (assets[0]) {
        assets[0].parentNode?.removeChild(assets[0]);
      }
    }, 5000);
  }

  return { go }
}



const Raptorize = (props: RaptorizeProps) => {
  const [index, setIndex] = useState(0);

  /**
   * Rather than requiring a separate css stylesheet, use JS to inject the styles directly.
   */
  ensureRaptorStyles();

  const options: RaptorizeInitOptions = { 
    ...defaults, ...props,
    className: 'raptor',
    uniqid: Date.now(),
  };

  useEffect(() => {
    if (options.disabled) return;

    const validateKonami = (e: KeyboardEvent) => {
      const keyCode = konamiKeyCode(e);
      setIndex((prev) => {
        if (keyCode === 65 && prev > 8 && options.repeat) return prev + 1;
        if (keyCode === konamiCode[prev]) return prev + 1;
        return 0;
      });
    };

    document.addEventListener("keydown", validateKonami);
    return () => document.removeEventListener("keydown", validateKonami);
  }, [options.disabled, options.repeat]);

  // Magic Time 🦕🦖
  if (index >= konamiCode.length) init(options).go();

  return (<>
    {options.code && <div>↑ ↑ ↓ ↓ ← → ← → B A</div>}
  </>);
};

export default Raptorize;