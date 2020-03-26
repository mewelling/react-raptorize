# react-raptorize 🦖

This component is totally invisible until a user triggers the [Konami Code](https://en.wikipedia.org/wiki/Konami_Code)... at which point they will see (and hear) a raptor run across their screen!

### Installation

```sh
yarn add react-raptorize
npm install react-raptorize --save
```

### Demo


### Usage

```javascript
<Raptorize 
  soundDelay={500}  // Delay (ms) before playing audio
  sound={true}      // Should sound play at all
  repeat={true}     // Allow repeating the final code
  code={false}      // Display the code in the UI
  disabled={false}  // Will this run at all
/>
```


This project is inspired by [formaweb/vanilla-raptorize](https://github.com/formaweb/vanilla-raptorize)... which itself was a port of the original [Zurb Raptorize](https://zurb.com/playground/jquery-raptorize).

### License

ISC