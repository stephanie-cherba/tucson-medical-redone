import React from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
	border: {
		alignSelf: 'center',
		borderBottom: '1px solid #b87333',
		width: '600px',
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		margin: '30px',
	},
	text: {
		fontSize: '12px',
		paddingBottom: '10px',
		textAlign: 'center',
	},
	tidbitsTitle: {
		fontWeight: '900',
	},
})

export const TidBits = () => {
	const classes = useStyles()
	return (
		<div className={classes.container}>
			<div className={classes.text}>
				<span className={classes.tidbitsTitle}>Tid Bits: </span>
				<span>Eating Celery uses more calories than the celery provides</span>
			</div>
			<div className={classes.border} />
		</div>
	)
}
