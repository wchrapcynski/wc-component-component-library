import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from '../components/buttons/buttons'

function onClickHandle() {
	console.log("I have been clicked!")
}

storiesOf("Button", module)
	.add("Button - primary", () => <Button type="primary" onClickHandle={onClickHandle}>Primary</Button>)
	.add("Button - secondary", () => <Button type="secondary" onClickHandle={onClickHandle}>Secondary</Button>)
	.add("Button - success", () => <Button type="success" onClickHandle={onClickHandle}>Success</Button>)
	.add("Button - danger", () => <Button type="danger" onClickHandle={onClickHandle}>Danger</Button>)
	.add("Button - warning", () => <Button type="warning" onClickHandle={onClickHandle}>Warning</Button>)
	.add("Button - info", () => <Button type="info" onClickHandle={onClickHandle}>Info</Button>)
	.add("Button - light", () => <Button type="light" onClickHandle={onClickHandle}>Light</Button>)
	.add("Button - dark", () => <Button type="dark" onClickHandle={onClickHandle}>Dark</Button>)
	.add("Button - disabled", () => <Button type="disabled" onClickHandle={onClickHandle}>Disabled</Button>)