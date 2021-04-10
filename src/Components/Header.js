import React from 'react'
import {createUseStyles} from 'react-jss'
import logo from '../logo.gif'

const useStyles = createUseStyles({
  container: {
    display: 'flex'
  },
  body: {
    
  }
})


export const Header = () => {
const classes = useStyles()
  return( 
    <div className={classes.container}>
      <img src={logo} alt='logo'/>
      <div className={classes.body} >
        <div>Golden West Weight Loss</div>
        <div>Tucson, Arizona</div>
        <div>(520) 792-1966</div>
        <div></div>
        <div>Changing the Shape of Tucson since 1984</div>
      </div>
    </div>
  )
}