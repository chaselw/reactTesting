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
	jest.mock('./Auth.js')
	const wrapper = mount(<App />);
	expect(wrapper.exists("[data-test='Logged-In-False']")).toBe(true);
})
