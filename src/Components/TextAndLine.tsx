import React, { ReactNode } from 'react'
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

interface IProps {
  text: ReactNode,
  withoutBorder?: boolean
}

export const TextAndLine = ({text, withoutBorder = false}: IProps) => {
	const classes = useStyles()
	return (
		<div className={classes.container}>
			<div className={classes.text}>
				{text}
			</div>
			<div className={!withoutBorder ? classes.border : undefined} />
		</div>
	)
}
