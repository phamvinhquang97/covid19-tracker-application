import React from 'react';
// all of this import in index.js
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
class App extends React.Component {
    // put all of the field what we want to re-render on interface into state.
    state = {
        data: {},


    }
    
    // build asynchronous componentDidMound() to get the data.
    async componentDidMount() {
        const fetchedData = await fetchData();
        console.log("this is data: ");
        console.log(fetchedData);

        // setState is the function to re-render interface.
        this.setState({data: fetchedData});
    }
    render() {
        // this.state.data
        const {data} = this.state; 
        return(
            // pass the data on props
            <div className={styles.container}>
                {/* Card components */}
                <Cards data = {data}/>
                {/* Chart components */}
                <Chart />
                {/* CountryPicker components */}
                <CountryPicker />
            </div>
        )
    }
}

export default App;



