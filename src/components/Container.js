import React, { useEffect, useState } from "react";

import { Button, Grid } from "@material-ui/core";
import Navbar from "./Navbar";
import MyCard from "./MyCard";
import MenuIcon from "@material-ui/core/Menu";
import { getmatches } from "../api/Api";
function Container() {
  const [matches, setmatches] = useState([]);
  useEffect(() => {
    {
      getmatches()
        .then((data) => setmatches(data.matches))
        .catch((error) => console.log("error", error));
    }
  }, []);
  return (
    <React.Fragment>
      <Navbar />

      <Grid container>
        <Grid item sm={2}></Grid>
        <Grid item sm={8}>
          {matches.map((match, i) => {
            return (
              <React.Fragment>
                {match.type === "Twenty20" ? (
                  <MyCard matchlist={match} id={match.unique_id} />
                ) : (
                  ""
                )}
              </React.Fragment>
            );
          })}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Container;
