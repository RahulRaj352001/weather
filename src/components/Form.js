import { Box, Button, makeStyles, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Getdata } from "../services/Api";
import { Information } from "./Information";

const usestyles = makeStyles({
  component: {
    padding: 10,
    height:'auto',
    background: "",
    boxShadow: "3px 5px 8px black",
  },
  input: {
    color: "#fff",
    marginRight: 15,
  },
  button: {
    height: 40,
    width: 150,
    background: "#e67e22",
    color: "#fff",
  },
  second:{
      
  }
});

export const Form = () => {
  const classes = usestyles();
   const [city, setCity] = useState('mumbai');
   const [country, setCountry] = useState('india');
   const [click, setClick] = useState(false)
  const [data, setdata] = useState();

  useEffect(() => {
       if (click===true) {
        const getWeather = async () => {
            await Getdata(city,country).then((response) => {
              setdata(response.data);
              console.log(response.data);
            });
          };
          getWeather();
       }
  }, [city,country,click]);

  const handleCity=(value)=>{
  setCity(value);
  setClick(false);
  }
  const handleCountry=(value)=>{
  setCountry(value);
  setClick(false);
  }
  const handleClick=()=>{
   setClick(true);
  }
  return (
    <>
      <Box className={classes.component}>
        <TextField
          inputProps={{ className: classes.input }}
          className={classes.input}
          label="city"
          variant="outlined"
          onChange={(e)=> handleCity(e.target.value)}
        />
        <TextField
          className={classes.input}
          inputProps={{ className: classes.input }}
          label="country "
          onChange={(e)=> handleCountry(e.target.value)}
        />
        <Button
          className={classes.button}
          color={"primary"}
          onClick={()=>{handleClick()}}

          variant="contained"
        >
          {" "}
          get Weather
        </Button>
      </Box>
      < p>jiji</p>
      <Information className={classes.second} data={data} />
    </>
  );
};
