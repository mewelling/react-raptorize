// __tests__/konami-code.js
// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import Raptorize from '../index'

test('it displays the konami code if the code prop is true', () => {
  const konamiCodeMessage = /↑ ↑ ↓ ↓ ← → ← → B A/i;
  render(<Raptorize soundDelay={500} sound repeat code />);

  // query* functions will return the element or null if it cannot be found
  // get* functions will return the element or throw an error if it cannot be found
  expect(screen.getByText(konamiCodeMessage)).toBeInTheDocument()
})