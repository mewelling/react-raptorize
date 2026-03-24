# react-raptorize 🦖

This component is totally invisible until a user triggers the [Konami Code](https://en.wikipedia.org/wiki/Konami_Code)... at which point they will see (and hear) a raptor run across their screen!

### Installation

```sh
yarn add react-raptorize
npm install react-raptorize --save
```

### Demo

See the raptor in action in the demo app here!

```sh
cd /example
npm install
npm run dev
```

### Usage

```javascript
<Raptorize
  soundDelay={500}  // Delay (ms) before playing audio
  sound             // Should sound play at all
  repeat            // Allow repeating the final code
  code              // Display the code in the UI
  disabled={false}  // Will this run at all
/>
```

This project is inspired by [formaweb/vanilla-raptorize](https://github.com/formaweb/vanilla-raptorize)... which itself was a port of the original [Zurb Raptorize](https://zurb.com/playground/jquery-raptorize).

### Development and `dist/`

The published package only ships the `dist/` folder (`"files": ["dist"]` in `package.json`). **This repository keeps `dist/` committed** so installs straight from Git (for example `react-raptorize` via `"file:.."` in the example app) work without running a build first.

If you change library source under `src/`, run `npm run build` and **commit the updated `dist/`** so the repo and npm tarball stay in sync. CI does not replace a forgotten rebuild—out-of-date `dist/` will mislead anyone using the package from the clone.

### License

ISC
