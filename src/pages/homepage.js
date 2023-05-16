import React from 'react';
import Slider from '../components/Slider/Slider';
import SmallSidebar from '../components/SmallSidebar/SmallSidebar';
import BigSidebar from '../components/BigSidebar/BigSidebar';

function Homepage(props) {
	return (
		<div className="sliderwrapper" data-testid="homepage">
			<SmallSidebar />
			<BigSidebar />
			<div className="sliderWrapper">
				<Slider />
			</div>
		</div>
	);
}

export default Homepage;
