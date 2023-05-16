import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Reservationshistory from '../pages/reservationshistory';
import store from '../redux/store/index';

describe('Components testing', () => {
	test('reservations component', () => {
		const tree = render(<Provider store={store}><BrowserRouter><Routes><Route path="/deleteItem" element={<Reservationshistory />} /></Routes></BrowserRouter></Provider>);
		expect(tree).toMatchSnapshot();
	});
});