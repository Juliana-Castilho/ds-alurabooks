import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbInputQuantity, IAbInputQuantityProps } from '../src';

export default {
  title: 'componentes/AbInputQuantity',
  component: AbInputQuantity,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbInputQuantity>;

const Template: ComponentStory<typeof AbInputQuantity> = args => (
  <AbInputQuantity {...args} />
);

export const AbInputQuantityComponent = Template.bind({});
AbInputQuantityComponent.args = {
  label: 'Uma label interessante',
} as IAbInputQuantityProps;
