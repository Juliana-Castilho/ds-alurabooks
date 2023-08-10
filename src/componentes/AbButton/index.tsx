import React from 'react';
import styled, { css } from 'styled-components';

export interface IAbButtonProps {
  text?: string;
  variation?: 'primary' | 'secondary';
  onClick?: () => void;
}

const StyledButton = styled.button<IAbButtonProps>`
  background: ${(props: IAbButtonProps) =>
    props.variation === 'primary' ? '#eb9b00' : '#fff'};
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  color: ${(props: IAbButtonProps) =>
    props.variation === 'primary' ? '#fff' : '#eb9b00'};
  font-size: 20px;
  cursor: pointer;
  ${(props: IAbButtonProps) =>
    props.variation === 'primary'
      ? css`
          &:hover {
            background: #b87900;
            border: 2px solid #b87900;
          }
        `
      : css`
          &:hover {
            background: #fff;
            border: 2px solid #b87900;
            color: #b87900;
          }
        `};
`;

export const AbButton = ({
  text,
  variation = 'primary',
  onClick,
}: IAbButtonProps) => {
  return (
    <StyledButton onClick={onClick} variation={variation}>
      {text}
    </StyledButton>
  );
};
