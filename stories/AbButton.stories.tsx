import React from 'react';
import { AbButton, IAbButtonProps } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Componentes/AbButton',
  component: AbButton,
} as ComponentMeta<typeof AbButton>;

const Template: ComponentStory<typeof AbButton> = args => (
  <AbButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  text: 'AbButton Primary',
  variation: 'primary',
} as IAbButtonProps;

export const Secondary = Template.bind({});

Secondary.args = {
  text: 'AbButton Secondary',
  variation: 'secondary',
} as IAbButtonProps;
