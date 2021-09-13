import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import logo from '../image/tree.jpeg'
import { Form } from "./Form";

const useStyle = makeStyles({
  component: {
      height:'100vh',
      display:'flex',
      alignItems:"center",
      width:'65%',
      margin:'0 auto',

  },
  leftContainer: {
    backgroundImage:`url(${logo})`,
    height: '80%',
    width: `30%`,
    backgroundSize: "cover",
    borderRadius:' 20px 0 0 20px'
  },
  rightContainer: {
    background:'linear-gradient(to right, #e74c3c,#e67e22)',
    height: '80%',
    width: `65%`,
    backgroundSize: "cover",
  },
});

export const Weather = () => {
    const classes=useStyle();
  return (
    <Box className={classes.component}>
      <Box className={classes.leftContainer}></Box>
      <Box className={classes.rightContainer}>
          <Form/>
      </Box>
    </Box>
  );
};
