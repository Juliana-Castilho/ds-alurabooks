import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #002f52;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border: none;
  cursou: pointer;
  color: #fff;
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

const StyledSpan = styled.span`
  font-size: 18px;
  line-height: 27px;
  display: inline-block;
  margin: 0 12px;
  color: #002f52;
  font-family: Arial, Helvetica, sans-serif;
`;

const StyledFlexContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

const StyledContainer = styled.div`
  width: 100px;
  text-align: center;
  display: inline-bloxk;
`;

const StyledLabel = styled.label`
  color: #002f52;
  display: block;
  font-weight: 700;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 8px;
`;

export interface IAbInputQuantityProps {
  onChange?: (value: number) => void;
}

export const AbInputQuantity = ({ onChange }: IAbInputQuantityProps) => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    if (onChange) {
      onChange(Number(value));
    }
  }, [value]);

  return (
    <StyledContainer>
      <StyledLabel>Quantidade</StyledLabel>
      <StyledFlexContainer>
        <StyledFlexContainer>
          <StyledButton onClick={() => setValue(prev => prev - 1)}>
            -
          </StyledButton>
        </StyledFlexContainer>
        <StyledSpan>{value}</StyledSpan>
        <StyledButton onClick={() => setValue(next => next + 1)}>
          +
        </StyledButton>
      </StyledFlexContainer>
    </StyledContainer>
  );
};
