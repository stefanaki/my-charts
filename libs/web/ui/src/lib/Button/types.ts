import { MouseEventHandler } from 'react';

type UiButtonColor =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';

export interface UiButtonProps {
  text: string;
  color?: UiButtonColor;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}