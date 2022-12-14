import React, {useState, useEffect} from 'react'
import { fetchDailyData } from '../../api';
import styles from './Chart.module.css';
import { Chart as ChartJS } from 'chart.js/auto';
import {Line, Bar} from 'react-chartjs-2';


//Using functional component
const Chart = ({data: {confirmed, deaths, recovered}, country}) => {
    // dailyDat is an array
    const [dailyData, setDailyData] = useState ([]);

    useEffect(() => {
        // useEffect is sync function -> we need to create async function inside pass to setDailyData.
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, []);

    // Line chart for global
    const lineChart = (
        // if statement  if daily data available or not.
        dailyData.length !== 0 ? (
        <Line
        data={{
            labels: dailyData.map(({date}) => date),
            // datasets for Infected and death people
            datasets: [{
                data: dailyData.map(({confirmed}) => confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
            }, {
                // datasets for Deaths and death people
                data: dailyData.map(({deaths}) => deaths),
                label: 'Infected',
                broderColor: '#3333ff',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
            }],
        }}
        />) : null
        
    );
    console.log(confirmed, recovered, deaths);
    const barChart = (
        confirmed ? (
          <Bar
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                  data: [confirmed.value, recovered.value, deaths.value],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Current state in ${country}` },
            }}
          />
        ) : null
      );
    return (
        <div className={styles.container}>
            {/* Line chart for global display */}
            {/* if the countries chossen the bar char will display other LineChart will be displayed */}
            {country ? barChart : lineChart};
        </div>

    )
}


export default Chart;