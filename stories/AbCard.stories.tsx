import React from 'react';
import { AbCard, IAbCardProps } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Componentes/AbCard',
  component: AbCard,
} as ComponentMeta<typeof AbCard>;

const Template: ComponentStory<typeof AbCard> = args => <AbCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'AbCard Primary',
  variation: 'default',
} as IAbCardProps;

export const Flat = Template.bind({});

Flat.args = {
  children: 'AbCard Secondary',
  variation: 'flat',
} as IAbCardProps;
