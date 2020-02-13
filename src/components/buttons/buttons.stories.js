import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import Button from './Buttons.js'

storiesOf("Button", module)
	.add("Button - primary", () => <Button type="primary" onClickHandle={action('Clicked!')}>Primary</Button>)
	.add("Button - secondary", () => <Button type="secondary" onClickHandle={action('Clicked!')}>Secondary</Button>)
	.add("Button - success", () => <Button type="success" onClickHandle={action('Clicked!')}>Success</Button>)
	.add("Button - danger", () => <Button type="danger" onClickHandle={action('Clicked!')}>Danger</Button>)
	.add("Button - warning", () => <Button type="warning" onClickHandle={action('Clicked!')}>Warning</Button>)
	.add("Button - info", () => <Button type="info" onClickHandle={action('Clicked!')}>Info</Button>)
	.add("Button - light", () => <Button type="light" onClickHandle={action('Clicked!')}>Light</Button>)
	.add("Button - dark", () => <Button type="dark" onClickHandle={action('Clicked!')}>Dark</Button>)
	.add("Button - disabled", () => <Button type="disabled" onClickHandle={action('Clicked!')}>Disabled</Button>)