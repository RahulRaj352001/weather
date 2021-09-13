import { Box, Button, makeStyles, TextField } from '@material-ui/core'
import React from 'react'
  const usestyles=makeStyles({
      component:{
        padding:10,
        background:'#445a6f'

      },
  input:{
      color:'#fff',
      marginRight:15,
     },
     button:{
        height:40,
        width:150,
        background:'#e67e22',
        color:'#fff'}
  })
export const Form = () => {
    const classes= usestyles();
    return (
       <Box className={classes.component}>
           <TextField inputProps={{className:classes.input}} 
             className={classes.input}
            label="city"/>
           <TextField     className={classes.input} inputProps={{className:classes.input}}  label="country "/>
           <Button className={classes.button} color={'primary'} variant="contained"> get Weather</Button>
       </Box>
    )
}
