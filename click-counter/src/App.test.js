import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without error', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.exists("[data-test='component-app']")).toBe(true);
});

test('logged in false', () => {
	jest.mock('./Auth.js'); //Trying to get `auth.isLoggedIn() === false`
	const wrapper = mount(<App />);
	console.log(wrapper.debug())
	expect(wrapper.exists("[data-test='Logged-In-False']")).toBe(true);
})
