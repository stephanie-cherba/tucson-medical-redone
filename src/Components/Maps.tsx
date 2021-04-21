import React from 'react'
import {createUseStyles} from 'react-jss'
import googleMap1 from '../googleMap1.png'
import googleMap2 from '../googleMap2.png'
import { TidBits } from './TidBits'

const useStyles = createUseStyles({
	container: {
		padding: '40px 150px 0 150px',
		fontSize: '12px',
	},
	title: {
		fontSize: '18px',
		fontWeight: '600',
	},
	body: {
		textIndent: '2em',
	},
})

export const Maps = () => {
	const classes = useStyles()
 const googleLink = 'https://www.google.com/maps/place/Golden+West+Medical+Center/@32.178107,-110.974717,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x7b18d0293c4aa28f!8m2!3d32.178017!4d-110.9725284?hl=en'
 return (
    <>
		  <TidBits /> 
      <div className={classes.container}>
				<div className={classes.title}>Maps</div>
				<p className={classes.body}>Golden West Weight Loss is located at 230 W. Ajo Way. We are between 
          6th and 12th Avenue, on the north side of Ajo Way, next to Hollinger Elementary School. A Google 
          map of our location with a driving directions link is <a href={googleLink} target='blank'>here</a> (will 
          open in a new window).</p>
        <p className={classes.body}>Below are two maps showing our office (the blue pointer).</p>
        <img src={googleMap1} />
        <p className={classes.body}>A wider view:</p>
        <img src={googleMap2} />
      </div>
		</>	
	)
}
