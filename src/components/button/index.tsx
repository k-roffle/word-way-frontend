import React from 'react';
import { css } from 'styled-components';
import styled from '../../static/styled-components';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export interface ButtonProps {
  type: 'button' | 'reset' | 'submit';
  corner: 'default' | 'rounded';
  size: 'small' | 'medium' | 'large';
  variant: 'text' | 'outlined' | 'contained';
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
  disabled: boolean;
  color: string;
}

const Button = (props: ButtonProps): React.ReactElement<ButtonProps> => {
  const {
    type,
    corner,
    size,
    variant,
    onClick,
    children,
    className,
    disabled,
    color,
  } = props;
  const themeContext = useContext(ThemeContext);
  const theme = themeContext;
  const fontSize = (!size || size === 'medium') ? 1.1 : (size === 'small' ? 0.8 : 1.8);
  const StyleButton = styled.button`
    background: transparent;
    border-radius: 4px;
    color: ${theme.colors.g500};
    padding: 6px 14px;
    min-width: 70px;
    letter-spacing: -0.9px;
    font-weight: 500;
    font-size: ${fontSize + 'em'};
    pointer-events: ${disabled ? 'none' : 'auto'};
    cursor: pointer;
    outline: 0;
    ${variant === 'text' && css`
    border: 0;
    `}

    ${variant === 'contained' && css`
      color: ${theme.colors.g100};
      background: ${color};
      border: 1px solid ${color};
    `}

    ${variant === 'outlined' && css`
      color: ${color};
      border: 1px solid ${color === theme.colors.g500 ? theme.colors.g200 : color};
    `}

    ${corner === 'rounded' && css`
      border-radius: ${fontSize * 1.25 + 'rem'};
    `}

    ${variant === 'contained' && color === theme.colors.g100 && css`
      color: ${theme.colors.g500};
      background: ${color};
      border: 1px solid ${color};
    `}

    ${size === 'small' && css`
      min-width: 90px;
    `}
  `;
  return (
    <StyleButton type={type} onClick={onClick} disabled={disabled} className={className}>
      {children}
    </StyleButton>
  );
};

Button.defaultProps = {
  type: 'button',
  corner: 'default',
  size: 'medium',
  onClick: () => {},
  disabled: false,
  variant: 'contain',
  color: 'black',
};

export default Button;
