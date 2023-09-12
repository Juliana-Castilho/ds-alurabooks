import React from 'react';
import { AbOptionGroup, IAbOptionGroupProps } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Componentes/AbOptionGroup',
  component: AbOptionGroup,
} as ComponentMeta<typeof AbOptionGroup>;

const Template: ComponentStory<typeof AbOptionGroup> = args => (
  <AbOptionGroup {...args} />
);

export const Dafault = Template.bind({});

Dafault.args = {
  options: [
    {
      id: 1,
      title: 'E-book',
      body: 'R$ 00,00',
      footer: '.pdf, .epub, .mob',
    },
    {
      id: 2,
      title: 'Impresso',
      body: 'R$ 00,00',
      footer: '.pdf, .epub, .mob',
    },
    {
      id: 3,
      title: 'Impresso + E-book',
      body: 'R$ 00,00',
      footer: '.pdf, .epub, .mob',
    },
  ],
} as IAbOptionGroupProps;
