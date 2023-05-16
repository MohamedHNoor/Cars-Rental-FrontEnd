import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import LoginPage from '../pages/LoginPage';
import store from '../redux/store/index';

describe('Components testing', () => {
	test('reservations component', () => {
		const tree = render(<Provider store={store}><BrowserRouter><Routes><Route path="/register" element={<LoginPage />} /></Routes></BrowserRouter></Provider>);
		expect(tree).toMatchSnapshot();
	});
});