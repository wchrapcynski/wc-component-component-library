import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from './button'

storiesOf("Button", module)
	.add("Button - primary", () => <Button type="primary">primary</Button>)
	.add("Button - secondary", () => <Button type="secondary">secondary</Button>)
	.add("Button - success", () => <Button type="success">success</Button>)
	.add("Button - danger", () => <Button type="danger">danger</Button>)
	.add("Button - warning", () => <Button type="warning">warning</Button>)
	.add("Button - disabled", () => <Button type="disabled">disabled</Button>)