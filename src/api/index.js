// make function to fetch the data what we need
import axios from "axios";

const url = 'https://covid19.mathdro.id/api';

// FUNCTION to fetch the data <Card> -> using asynchronous function to deal with asynchronous data.
export const fetchData = async () => {
    // if request successful
    try{
        // return response from API -> structure what data we want to take
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url); // data = response.data

        // // To take the data what we need from the object -> because the key and value same name
        // const modifiedData = {
        //     confirmed, // mean confirmed = confirmed
        //     recovered,
        //     deaths,
        //     lastUpdate,
        // }
        // return modifiedData;

        // return the modifiedData after modify
        return {confirmed, recovered,deaths,lastUpdate};

    } 
    catch(error){

    }
    
}

// FUNCTION fetching the data from API <chart>
export const fetchDailyData = async () => {
    try {

        const {data} = await axios.get(`${url}/daily`);
        // data is array -> use map() function to loop the data -> return the object each loop.
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        return modifiedData;
    } catch(error){
        
    }
}