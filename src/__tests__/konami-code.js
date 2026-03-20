import '@testing-library/jest-dom'

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import Raptorize from '../index'

test('it displays the konami code if the code prop is true', () => {
  const konamiCodeMessage = /↑ ↑ ↓ ↓ ← → ← → B A/i;
  render(<Raptorize soundDelay={500} code={true} />);
  expect(screen.getByText(konamiCodeMessage)).toBeInTheDocument()
});

test('it does not display the konami code if the code prop is false', () => {
  const konamiCodeMessage = /↑ ↑ ↓ ↓ ← → ← → B A/i;
  render(<Raptorize soundDelay={500} code={false} />);
  expect(screen.queryByText(konamiCodeMessage)).not.toBeInTheDocument()
});