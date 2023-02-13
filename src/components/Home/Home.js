import React, { useContext } from "react";
import AuthContext from "../store/auth-context";
import Button from "../UI/Button/Button";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  const authCtx = useContext(AuthContext);
  // html like tag : - JSX
  return (
    <Card className={classes.home}>
      <h1>You are now logged in!</h1>
      <Button onClick={authCtx.onLogout}>Log Out</Button>
    </Card>
  );
};

export default Home;
