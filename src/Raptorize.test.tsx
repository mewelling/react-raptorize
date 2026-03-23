import '@testing-library/jest-dom'

import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Raptorize from './index'

jest.mock('./injectRaptorStyles', () => ({
  ensureRaptorStyles: jest.fn()
}));

jest.mock('./assets/images/raptor.png', () => ({
  default: 'raptor.png'
}));

jest.mock('./assets/sounds/raptor.mp3', () => ({
  default: 'raptor.mp3'
}));

jest.mock('./assets/sounds/raptor.ogg', () => ({
  default: 'raptor.ogg'
}));

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

test('after the konami code, go() runs (raptor visible, animation class, sound plays)', async () => {
  const playSpy = jest.spyOn(HTMLMediaElement.prototype, 'play').mockResolvedValue(undefined as never);

  const user = userEvent.setup()
  render(<Raptorize soundDelay={500} />)

  await user.keyboard(
    '[ArrowUp][ArrowUp][ArrowDown][ArrowDown][ArrowLeft][ArrowRight][ArrowLeft][ArrowRight][KeyB][KeyA]'
  )

  const img = screen.getByRole('img', { name: /raptor/i })
  // go() sets display and adds the running class; init() alone leaves display:none and no -go class
  expect(img).toBeVisible()
  expect(img).toHaveClass('raptor-go')

  await waitFor(() => expect(playSpy).toHaveBeenCalled())

  playSpy.mockRestore()
  
});