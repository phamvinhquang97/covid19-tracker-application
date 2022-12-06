import React from 'react';
// all of this import in index.js
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
class App extends React.Component {
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



