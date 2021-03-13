import React, { useEffect, useState } from 'react';
import './styles/raptorize.css';
import raptor from './assets/images/raptor.png';
import sound1 from './assets/sounds/raptor.mp3';
import sound2 from './assets/sounds/raptor.ogg';  // backup

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

const Raptorize = props => {

};

export default Raptorize;