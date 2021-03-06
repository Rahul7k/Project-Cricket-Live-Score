import React, { Fragment, useEffect, useState } from "react";
import './App.css';
import { Button, Grid } from "@material-ui/core";
import Navbar from './components/Navbar';
import MyCard from "./components/MyCard";
import { getMatches } from './api/Api';

function App() {


  const[matches, setMatches] = useState([]);


  useEffect(() => {
    getMatches()
      .then((data) => {
        setMatches(data.matches);
        console.log(data.matches);
      })
      .catch((error) => alert("Could not load data"));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to Cricket Live Score</h1>
      <h3>Here are the details of recent T20 matches across the world.</h3>

      
      <Grid container>
        <Grid sm="2"></Grid>
        <Grid sm="8">
          {
          matches.map((match) => (
            <Fragment key={match.unique_id}>
              {/*match types "Twenty20", "ODI", "", etc*/}
                {match.type == "Twenty20" ?(
                  <MyCard key={match.unique_id} match={match} /> 
                  ) : ( ""
                )}
            </Fragment>
          ))
          }
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
