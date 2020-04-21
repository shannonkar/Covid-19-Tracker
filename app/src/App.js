import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';


class App extends Component{
	constructor(){
		super()
		this.state = {
			data: {}
		}
	}
	

	async componentDidMount (){
		const fetchedData = await fetchData();
		this.setState({data: fetchedData})
		console.log(data);
	}


	render(){
		const { data } = this.state
		return(
			<div className = {styles.container}>
				<Cards data ={ data }  />
				<CountryPicker />
				<Chart />
			</div>
			)
	}
}
export default App;

