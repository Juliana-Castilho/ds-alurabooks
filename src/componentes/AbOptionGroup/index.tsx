import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSection = styled.section<{ selecionado: boolean }>`
  width: 194px;
  height: 88px;
  background: ${props =>
    props.selecionado
      ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)'
      : '#ffffff'};
  border: 1px solid;
  border-color: ${props => (props.selecionado ? '#002f52' : '#eb9b00')};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin: 10px;
  font-family: sans-serif;
  cursor: pointer;
  header {
    color: ${props => (props.selecionado ? '#ffffff' : '#eb9b00')};
    font-size: 12px;
    font-weight: 400;
  }
  strong {
    color: ${props => (props.selecionado ? '#ffffff' : '#eb9b00')};
    font-size: 16px;
    font-weight: 700;
  }
  footer {
    color: ${props => (props.selecionado ? '#ffffff' : 'rgba(0, 0, 0, 0.54)')};
    font-size: 12px;
    font-weight: 400;
  }
`;

export type TAbOptionGroup = {
  id: number;
  title: string;
  body: string;
  footer: string;
};

export interface IAbOptionGroupProps {
  options: TAbOptionGroup[];
  defaultValue?: TAbOptionGroup | null;
  onChange?: (option: TAbOptionGroup) => void;
}

export const AbOptionGroup = ({
  options,
  onChange,
  defaultValue,
}: IAbOptionGroupProps) => {
  const [select, setSelect] = useState<TAbOptionGroup | null>(
    defaultValue ?? null
  );

  const isSelected = (option: TAbOptionGroup): void => {
    setSelect(option);
    if (onChange) {
      onChange(option);
    }
  };
  return (
    <>
      {options.map(option => (
        <StyledSection
          onClick={() => isSelected(option)}
          key={option.id}
          selecionado={select?.id == option.id}
        >
          <header>{option.title}</header>
          <div>
            <strong>{option.body}</strong>
          </div>
          <footer>{option.footer}</footer>
        </StyledSection>
      ))}
    </>
  );
};
