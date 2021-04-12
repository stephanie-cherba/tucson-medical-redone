import React from 'react'
import {createUseStyles} from 'react-jss'
import {TidBits} from './TidBits'

const useStyles = createUseStyles({
	container: {},
})

export const Tools = () => {
	const classes = useStyles()
	return (
		<>
			<TidBits />
			<div className={classes.container} />
		</>
	)
}
