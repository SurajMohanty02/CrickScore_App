import { Button, Card, CardActions, CardContent, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { getmatchdetails } from '../api/Api';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

export const MyCard=({matchlist})=> {
    const [Details,setDetails]=useState({});
    const [open,setopen]=useState();
   
    
const showdetails=(id)=>{
getmatchdetails(id).then((data)=>{setDetails(data)
    handleopen()}
).catch((error)=>console.log("error",error))
}

    const getmatchcard=()=>{
        return ( 
            <React.Fragment>
        <Card >
        <CardContent>
        <Grid container justify="center" 
        spacing={4} alignItems="center">        
        <Grid item>
        <Typography>{matchlist["team-1"]}</Typography>
        </Grid>
        
        <Grid item>
           <img src={require('../vs.png')} 
           alt="myImg"
           style={{height:"80px"}} />
        </Grid>
        
        <Grid item>
        <Typography> {matchlist["team-2"]}</Typography>
           
        </Grid>
        </Grid>

         <Typography variant="h5">  </Typography>
        </CardContent>
        <CardActions >
            <Grid container justify="center" >
        <Button  onClick={()=>{
            showdetails(matchlist.unique_id)
        }} variant="contained" color="primary">
        Show Details
        </Button>
        <Button style={{marginLeft:5}} variant="contained" color="primary">
        Strat Time {new Date(matchlist["dateTimeGMT"]).toLocaleString()}
        </Button>
        </Grid>
        </CardActions>
        </Card>
        <br/>
        </React.Fragment>
        )
    };
    const handelclose=()=>{
        setopen(false)
    }
    const handleopen=()=>{
        setopen(true)
    }
    const getdialog=()=>{
        return(
        <Dialog open={open} onClose={handelclose}>
        <DialogTitle id="alert-dialog-title">MatchDetails...</DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
        <Typography>{Details.stat}</Typography>
        Match :<span>{Details.matchStarted? "Started":"Still not Started"}
        </span><br/>
        Score: <span>{Details.score}</span><br/>
        </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={handelclose} variant="outlined"
        color="secondary" autoFocus><CancelOutlinedIcon/></Button>
        </DialogActions>
        </Dialog>
        )}
    return (
        <React.Fragment>
        {getmatchcard()}
        {getdialog()}
        </React.Fragment>
    );
};

export default MyCard;