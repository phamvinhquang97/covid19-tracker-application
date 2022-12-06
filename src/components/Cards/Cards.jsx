import React from 'react'
import {Grid,Card, CardContent, Typography} from '@mui/material/';
import styles from './Cards.module.css'
import cx from 'classnames'
import CountUp from 'react-countup';

//Using functional component
const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate} }) =>{
    console.log({lastUpdate});
    // if we do not get the data
    if(!confirmed){
        return 'Loading...'
    }
    
    return (
        <div className={styles.container}>
            {/* All of Grid item */}
            <Grid container spacing={3} justify="center">

                {/* design for one specific grid item */}
                <Grid item component={Card} xs={12} md={3}  className = {cx(styles.card, styles.infected)}>
                    {/* Card content */}
                    <CardContent>
                        {/* Typography - Text on card content */}
                        <Typography color="textSecondary" gutterBottom>Inferred</Typography>
                        <Typography variant="h5" gutterBottom>
                            {/* Add the Countup component for move number and increase. */}
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color= "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >Number of active cases of COVID</Typography>
                    </CardContent>
                </Grid>

                {/* design for one specific grid item */}
                <Grid item component={Card} xs={12} md={3}  className = {cx(styles.card, styles.recovered)}>
                    {/* Card content */}
                    <CardContent>
                        {/* Typography - Text on card content */}
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5" gutterBottom>
                            {/* Add the Countup component for move number and increase. */}
                            <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color= "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >Number of recoveries cases of COVID</Typography>
                    </CardContent>
                </Grid>

                {/* design for one specific grid item */}
                <Grid item component={Card} xs={12} md={3}  className = {cx(styles.card, styles.deaths)}>
                    {/* Card content */}
                    <CardContent>
                        {/* Typography - Text on card content */}
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" gutterBottom>
                            {/* Add the Countup component for move number and increase. */}
                            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color= "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >Number of deaths cases of COVID</Typography>
                    </CardContent>
                </Grid>

            </Grid>
            
        </div>

    );
}


export default Cards;