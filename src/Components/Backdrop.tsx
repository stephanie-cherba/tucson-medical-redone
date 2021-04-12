import React from 'react'
import {createUseStyles} from 'react-jss'

interface IProps {
	handleBackdropClick: () => void
}

const useStyles = createUseStyles({
	container: {
		marginTop: '-38%',
		position: 'fixed',
		backgroundSize: 'cover',
		width: '100%',
		height: '170%',
		left: 0,
		background: 'rgba(0, 0, 0, 0.3)',
		zIndex: '0',
	},
})

export const Backdrop = ({handleBackdropClick}: IProps) => {
	const classes = useStyles()
	return <div className={classes.container} onClick={handleBackdropClick}></div>
}
