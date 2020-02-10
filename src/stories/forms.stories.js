import React from 'react';
import {storiesOf} from '@storybook/react';
import Forms from '../components/forms/forms'

function onClickHandle(event) {
	event.preventDefault();
	console.log("I have been clicked!")
}

storiesOf("Forms", module)
	.add("Forms - Search", () => 
		<Forms inputType="test" formType="search" onClickHandle={onClickHandle} buttonText="Search"/>)