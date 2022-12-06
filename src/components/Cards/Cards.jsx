import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import styles from './Cards.module.css'
//Using functional component
const Cards = () =>{
    
    return (
        <div className={styles.container}>
            {/* All of Grid item */}
            <Grid container spacing={3} justify="center">
                {/* design for one specific grid item */}
                <Grid item component={Card}>
                    {/* Card content */}
                    <CardContent>
                        {/* Typography - Text on card content */}
                        <Typography color="textSecondary" gutterBottom>Inferred</Typography>
                        <Typography variant="h5" gutterBottom>REAL DATA</Typography>
                        <Typography color= "textSecondary">REAL DATE</Typography>
                        <Typography variant="body2" >Number of active cases of COVID</Typography>
                    </CardContent>

                </Grid>

            </Grid>
            
        </div>

    );
}


export default Cards;