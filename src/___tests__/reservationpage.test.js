import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReservationPage from '../pages/reservationpage';
import store from '../redux/store/index';

describe('Components testing', () => {
	test('reservations component', () => {
		const tree = render(<Provider store={store}><BrowserRouter><Routes><Route path="/addItem" element={<ReservationPage />} /></Routes></BrowserRouter></Provider>);
		expect(tree).toMatchSnapshot();
	});
});