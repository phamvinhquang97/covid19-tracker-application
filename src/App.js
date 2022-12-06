import React from 'react';
// all of this import in index.js
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
class App extends React.Component {
     
    // build asynchronous componentDidMound() to get the data.
    async componentDidMount() {
        const data = await fetchData();
        console.log(data);

    }
    render() {
        return(
            <div className={styles.container}>
                {/* Card components */}
                <Cards />
                {/* Chart components */}
                <Chart />
                {/* CountryPicker components */}
                <CountryPicker />
            </div>
        )
    }
}

export default App;



