# react-raptorize 🦖

[![npm](https://img.shields.io/npm/v/react-progress-label.svg)](https://www.npmjs.com/package/react-progress-label)
[![npm](https://img.shields.io/npm/dm/react-progress-label.svg)](https://www.npmjs.com/package/react-progress-label)
[![Build Status](https://travis-ci.org/swiftcarrot/react-progress-label.svg?branch=master)](https://travis-ci.org/swiftcarrot/react-progress-label)
[![codecov](https://codecov.io/gh/swiftcarrot/react-progress-label/branch/master/graph/badge.svg)](https://codecov.io/gh/swiftcarrot/react-progress-label)

This component is totally invisible until a user triggers the [Konami Code](https://en.wikipedia.org/wiki/Konami_Code)... at which point they will see (and hear) a raptor run across their screen!

![screenshot](https://raw.githubusercontent.com/swiftcarrot/react-progress-label/master/screenshot.png)

### Installation

```sh
yarn add react-raptorize
npm install react-raptorize --save
```

### Demo

[https://swiftcarrot.dev/react-progress-label](https://swiftcarrot.dev/react-progress-label)

### Usage

```javascript
<ProgressLabel
  progress={50}
  startDegree={60}
  progressWidth={8}
  trackWidth={20}
  trackBorderWidth={0}
  trackBorderColor="#0000ff"
  cornersWidth={4}
  size={400}
  fillColor="black"
  trackColor="red"
  progressColor="green"
/>
```


This project is inspired by [formaweb/vanilla-raptorize](https://github.com/formaweb/vanilla-raptorize)... which itself was a port of the original [Zurb Raptorize](https://zurb.com/playground/jquery-raptorize).

### License

ISC