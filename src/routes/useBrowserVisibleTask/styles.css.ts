// styles.css.ts

import { keyframes, createVar } from '@vanilla-extract/css';
import { style, styled } from 'styled-vanilla-extract/qwik';

export const bg_color = createVar();

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const Label = styled.h3`
  user-select: none;
  padding: 10;
`;

export const containerBase = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  width: 120,
  height: 120,
  borderRadius: '20%',
  color: 'white',
  userSelect: 'none',
});

export const cssAnim = style([
  containerBase,
  {
    backgroundColor: bg_color,
    animation: `${rotate} linear 3s infinite`,
  },
]);

export const gsapAnim = style([
  containerBase,
  {
    backgroundColor: bg_color,
  },
]);

export default 'CSS'; // required 🤔
