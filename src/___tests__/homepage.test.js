import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Homepage from '../pages/homepage';
import store from '../redux/store/index';

describe('Components testing', () => {
	test('home component', () => {
		const tree = render(<Provider store={store}><BrowserRouter><Routes><Route path="/" element={<Homepage />} /></Routes></BrowserRouter></Provider>);
		expect(tree).toMatchSnapshot();
	});
});