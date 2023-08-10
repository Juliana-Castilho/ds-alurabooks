import React from 'react';
import { AbTag, IAbTagProps } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Componentes/AbTag',
  component: AbTag,
} as ComponentMeta<typeof AbTag>;

const Template: ComponentStory<typeof AbTag> = args => <AbTag {...args} />;

export const AbTagComponent = Template.bind({});

AbTagComponent.args = {
  text: 'AbTag',
} as IAbTagProps;
