import React from 'react';
import styled from 'styled-components';

export interface IAbTagProps {
  text?: string;
  onClick?: () => void;
}

const StyledAbTag = styled.button<IAbTagProps>`
  display: inline-block;
  font-family: sans-serif;
  background: #eb9b00;
  padding: 24px, 32px;
  border: 2px solid #eb9b00;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  font-weight: 700;
`;

export const AbTag = ({ text, onClick }: IAbTagProps) => {
  return <StyledAbTag onClick={onClick}>{text}</StyledAbTag>;
};
