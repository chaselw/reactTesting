import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
* Factory function to create a shallow wrapper for the App component
* @function setup
* @param {object} props - Component props specific to this setup.
* @param {any} state - initial state for setup
* @returns {ShallowWrapper}
*/
const setup = (props={}, state=null) => {
	return shallow(<App {...props} />)
}

/**
* Return ShallowWrapper containing node(s) with the given data-test value.
* @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
* @param {String} val - Value of data-test attribute for search.
* @returns {ShallowWrapper}
*/
const findByTestAttr = (wrapper, val) => {
	return wrapper.find(`[data-test=${val}]`);
}

test('renders without error', () => {
	const wrapper = setup();
	expect(wrapper.exists("[data-test='component-app']")).toBe(true);
});
test('renders increment button', () => {
	const wrapper = setup();
	expect(wrapper.exists("[data-test='increment-button']")).toBe(true);
});
test('renders counter display', () => {
	const wrapper = setup();
	expect(wrapper.exists("[data-test='counter-display']")).toBe(true);
});
test('counter starts at 0', () => {

});
test('clicking button increments counter display', () =>{

});