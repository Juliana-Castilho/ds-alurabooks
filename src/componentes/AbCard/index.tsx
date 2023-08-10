import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

export interface IAbCardProps {
  children?: ReactNode;
  variation?: 'default' | 'flat';
}

const StyledAbCard = styled.div<IAbCardProps>`
  background-color: ${(props: IAbCardProps) =>
    props.variation === 'default' ? '#0c3e60' : '#fff'};
  color: ${(props: IAbCardProps) =>
    props.variation === 'default' ? '#fff' : '#676767'};
  padding: 48px;
  font-family: sans-serif;
  font-size: 24px;
  font-weight: 700;
  justify-content: space-between;
  ${(props: IAbCardProps) =>
    props.variation === 'flat' &&
    css`
      border-radius: 10px;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.62);
    `};
`;

export const AbCard = ({ children, variation = 'default' }: IAbCardProps) => {
  return <StyledAbCard variation={variation}>{children}</StyledAbCard>;
};
