import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbInputMail, IAbInputMailProps } from '../src/componentes/AbInputMail';

export default {
  title: 'componentes/AbInputMail',
  component: AbInputMail,
  argTypes: {
    label: {
      control: 'text',
    },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbInputMail>;

const Template: ComponentStory<typeof AbInputMail> = args => (
  <AbInputMail {...args} />
);

export const AbInputMailComponent = Template.bind({});
AbInputMailComponent.args = {
  label: 'E-mail',
} as IAbInputMailProps;
