import React from 'react'
import {createUseStyles} from 'react-jss'
import {TidBits} from './TidBits'

const useStyles = createUseStyles({
	container: {},
})

export const RequestAppointment = () => {
	const classes = useStyles()
	return (
		<>
			<TidBits />
			<div> Appointments</div>
			<div className={classes.container} />
		</>
	)
}
