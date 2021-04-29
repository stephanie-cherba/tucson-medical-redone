import React from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
	border: {
		alignSelf: 'center',
		borderBottom: '1px solid #b87333',
		width: '800px',
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
    alignItems: 'center',
		margin: '70px 0 20px 0',
	},
	text: {
		fontSize: '10px',
		padding: '20px 0',
		textAlign: 'center',
    maxWidth: '600px',
	},
	tidbitsTitle: {
		fontWeight: '900',
	},
	'@media (max-width: 1024px)': {
		border: {
			width: '80vw',
			display: 'none'
		},
		container: {
			margin: '35px 50px'
		},
	}
})

export const Footer = () => {
	const classes = useStyles()
	return (
		<div className={classes.container}>
			<div className={classes.border} />
			<div className={classes.text}>
        IMPORTANT NOTICE: While this web page is intended to be informative, it can not and does not 
        contain all information available. It is not a substitute for consulting with your doctor. Always 
        consult with your doctor prior to making decisions regarding any treatment. Your use of this website 
        requires your acceptance of our terms of use and privacy policy. Copyright © 2000 - 2021, Golden 
        West Medical Center, P.C. (DBA Golden West Weight Loss) and it's licensors - All rights reserved.
			</div>
		</div>
	)
}
