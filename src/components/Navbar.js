import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import SportsCricket from "@material-ui/icons/SportsCricket";

const Navbar=()=>{
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit">
                    <SportsCricket />
                </IconButton>
                <Typography variant="h5">
                    Live Cricket Score by Rahul
                </Typography>
            </Toolbar>

        </AppBar>
    );
};


export default Navbar;