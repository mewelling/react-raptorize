import css from './styles/raptorize.css?inline';

let injected = false;

export function ensureRaptorStyles() {
  if (typeof document === 'undefined' || injected) return;
  injected = true;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
}
