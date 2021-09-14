

import {Box,makeStyles,Typography} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import OpacityIcon from '@material-ui/icons/Opacity';
import CloudIcon from '@material-ui/icons/Cloud';
import DehazeIcon from '@material-ui/icons/Dehaze';
const usestyles = makeStyles({
    component: {
      margin:50,
      display:"flex",
      flexWrap:"wrap",
    },
    row:{
        flexBasis:'100%',
        padding:"2px",
        border:' 1px solid black ',
        fontSize:20,
        letterSpacing:2,
        margin: 3,
    },
    value:{
        color:"#fff",
    }
  });
 export const Information=({data})=>{
   const classes= usestyles();
   return (
        data? <Box className={classes.component}>
        <Typography className={classes.row}> <LocationOnIcon/>  location: <span className={classes.value}>{data.name} ,{data.sys.country}</span></Typography>
        <Typography className={classes.row}> <Brightness7Icon/> Temprature: <span className={classes.value}>{data.main.temp} *C</span> </Typography>
        <Typography className={classes.row}> <OpacityIcon/> humidity: <span className={classes.value}>{data.main.humidity}</span></Typography>
        <Typography className={classes.row}> <Brightness5Icon/> sun_Rise: <span className={classes.value}>{new Date(data.sys.sunrise* 1000).toLocaleTimeString()}</span></Typography>
        <Typography className={classes.row}> <Brightness6Icon/> sun_Set: <span className={classes.value}> {new Date(data.sys.sunset* 1000).toLocaleTimeString()}</span></Typography>
        <Typography className={classes.row}> <DehazeIcon/> Condition: <span className={classes.value}>{data.weather[0].main}</span></Typography>
        <Typography className={classes.row}> <CloudIcon/> Cloud: <span className={classes.value}>{data.clouds.all} %</span> </Typography>
        </Box> :' '
   )
}
