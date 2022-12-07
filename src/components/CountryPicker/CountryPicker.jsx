import React, {useState, useEffect} from 'react'
import {NativeSelect, FormControl} from '@mui/material/';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api'
//Using functional component
const CountryPicker = ({handleCountryChange}) =>{
    // fetchedCountries is an array
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        
        // call function to fetch countryPicker data
        fetchAPI();
        // [setFetchedCountries] call because for the value in the list change.
    }, [setFetchedCountries]);

    return (
        <FormControl className={styles.formControl}>
            {/* fetching countryPicker from api -> loop to for user select. */}
            <NativeSelect defaultValue="" onChange= {(e) => handleCountryChange
                (e.target.value)}>
                <option value= ""> Global</option>
                {/* use map function to loop the data -> create option and passed country inside. */}
                {/* key and value should be set when using map - REACT RULE */}
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        
        </FormControl>
        

    )
}


export default CountryPicker;