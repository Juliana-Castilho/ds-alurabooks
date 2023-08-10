import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ICardProps {
  children?: ReactNode;
}

const StyledCard = styled.div`
  padding: 48px;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.62);
`;

export const Card = ({ children }: ICardProps) => {
  return <StyledCard>{children}</StyledCard>;
};
