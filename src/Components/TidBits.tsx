import React from 'react'
import {createUseStyles} from 'react-jss'
import {TextAndLine} from './TextAndLine'

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
	}
})

export const TidBits = () => {
	const classes = useStyles()
	return (
		<TextAndLine 
			text={
				<>
					<span style={{fontWeight: 900}}>Tid Bits: </span>
					<span>Eating Celery uses more calories than the celery provides</span>
				</>
			} 
		/>
	)
}