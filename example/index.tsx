import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Raptorize from '../.';

const App = () => {
  return (
    <div>
      <Raptorize soundDelay={500} sound repeat code disabled={false} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
