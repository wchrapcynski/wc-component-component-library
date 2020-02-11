import React from 'react';
import {storiesOf} from '@storybook/react';
import SearchForm from '../components/forms/SearchForm'

function onClickHandle(event) {
	event.preventDefault();
	console.log("I have been clicked!")
}

storiesOf("Forms", module)
	.add("Forms - Search", () => 
		<SearchForm inputType="text" formType="search" onClickHandle={onClickHandle} buttonText="Search"/>)	