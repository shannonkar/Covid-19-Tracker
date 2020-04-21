import React, { useState, useEffect } from 'react';
import { fetchedDailyData } from '../..api';
import {Line, Bar} from 'reactchartjs-2';

const Chart = () => {
	const [dailyData, setDailyData] = useState({});
	useEffect(() =>{
		const fetchAPI = async() =>{
			setDailyData(await fetchDailyData());
		}

	});
	return (
		<h1> CountryPicker </h1>
		)
}
export default Chart