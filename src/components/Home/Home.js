import React from "react";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  // html like tag : - JSX
  return (
    <Card className={classes.home}>
      <h1>You are now logged in!</h1>
    </Card>
  );
};

export default Home;
