import { Button, Card, CardActions, CardContent, Grid, Typography, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import SportsCricket from "@material-ui/icons/SportsCricket";
import { getMatchDetail } from "../api/Api";

const MyCard =( { match } )=>{

    const [detail, setDetail] = useState({});

    const [open, setOpen] = useState(false);



    const handleClick = (id) => {  
        getMatchDetail(id)
            .then((data) => {
                console.log("MATCH DATA", data);
                setDetail(data);
                handleOpen();
            })
            .catch((error) => console.log(error));
    };


    const getMatchCard = () => {
        return (
            <Card style={{ marginTop: 15}}>
                <CardContent>
                    <Grid container justify="center" alignItems="center" spacing={8}>
                        <Grid item>
                            <Typography variant="h5" >{match["team-1"]}</Typography>
                        </Grid>
                        <Grid item>
                            <IconButton color="inherit">
                                <SportsCricket fontSize="large" color="primary"/>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5" >{match["team-2"]}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify="center" alignItems="center">
                       <Button onClick={()=>{
                           handleClick(match.unique_id);
                       }} variant="contained" color="primary">
                           Show Details
                        </Button>
                        <Button style={{marginLeft:10}} variant="contained" color="primary">
                           Start Time {new Date(match.dateTimeGMT).toLocaleString()}
                        </Button>
                    </Grid>
                </CardActions>
            </Card>
        );
    };

    const handleClose=()=>{
        setOpen(false);
    };

    const handleOpen=()=>{
        setOpen(true);
    };


    const getDialog=()=>(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">{"Match Detail..."}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography>{detail.stat}</Typography>
                    <Typography>
                        Match
                        <span style={{fontStyle: "italic", fontWeight: "bold"}}> 
                            {detail.matchStarted ? ": Started" : ": Not Started Yet"}{" "}
                        </span>
                    </Typography>

                    <Typography>
                        Score
                        <span style={{fontStyle: "italic", fontWeight: "bold"}}> 
                            {": "}
                            {detail.score}
                        </span>
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Close
                </Button>
            </DialogActions>

        </Dialog>
    );

    return (
        <Fragment>
            {getMatchCard()}
            {getDialog()}
        </Fragment>
    ); 
};

export default MyCard;