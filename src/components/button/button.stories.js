import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from './button'

function onClickHandle() {
	console.log("I have been clicked!")
}

storiesOf("Button", module)
	.add("Button - primary", () => <Button type="primary" onClickHandle={onClickHandle}>primary</Button>)
	.add("Button - secondary", () => <Button type="secondary" onClickHandle={onClickHandle}>secondary</Button>)
	.add("Button - success", () => <Button type="success" onClickHandle={onClickHandle}>success</Button>)
	.add("Button - danger", () => <Button type="danger" onClickHandle={onClickHandle}>danger</Button>)
	.add("Button - warning", () => <Button type="warning" onClickHandle={onClickHandle}>warning</Button>)
	.add("Button - info", () => <Button type="info" onClickHandle={onClickHandle}>info</Button>)
	.add("Button - light", () => <Button type="light" onClickHandle={onClickHandle}>light</Button>)
	.add("Button - dark", () => <Button type="dark" onClickHandle={onClickHandle}>dark</Button>)
	.add("Button - disabled", () => <Button type="disabled" onClickHandle={onClickHandle}>disabled</Button>)