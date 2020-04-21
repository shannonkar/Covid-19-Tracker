import axios from 'axios';

const url ='https://covid19.mathdro.id/api'
export const fetchData = async () => {
	try{
		const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);//destrucred
		 return  {confirmed, recovered, deaths,lastUpdate} //returning values of response, since keys and values have the same name, we can ommit the keys
	} catch (error){

	}
}
export const fetchDailyData = async () =>{
	try {
		const { data } = await axios.get(`${url}/daily`);
		const modifiedData = data.map((dailyData)=> ({
			confirmed: dailyData.confirmed.total,
			deaths: dailyData.deaths.total,
			date: dailyData.reportDate,
		}));
		return modifiedData;
	}

	catch(error){

	}
	
}