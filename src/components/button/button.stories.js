import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from './button'

storiesOf("Button", module)
	.add("Button - primary", () => <Button type="primary">primary</Button>)
	.add("Button - disabled", () => <Button type="disabled">disabled</Button>)