import React from 'react';
// all of this import in index.js
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
class App extends React.Component {
    // put all of the field what we want to re-render on interface into state.
    state = {
        data: {},
        country: '',


    }
    
    // build asynchronous componentDidMound() to get the data.
    async componentDidMount() {
        const fetchedData = await fetchData();
        // setState is the function to re-render interface.
        this.setState({data: fetchedData});
    }

    // handled the countries select and load the data (Infected, Reovered, Dealth) based on the selected country
    handleCountryChange = async (country) => {
        // fetch the data 
        // set the state
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country});
    }

    render() {
        // this.state.data
        const {data, country} = this.state; 
        return(
            // pass the data on props
            <div className={styles.container}>
                {/* Card components */}
                <Cards data = {data}/>
                {/* CountryPicker components */}
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                {/* Chart components */}
                <Chart data = {data} country = {country} />
            </div>
        )
    }
}

export default App;



