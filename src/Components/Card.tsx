import React from 'react'
import {createUseStyles} from 'react-jss'

interface IContent {
	keyword: string,
	subtitle?: string,
	description: string
}
interface IProps {
	title: string,
	mainDescription?: string,
	content: Array<IContent>
}

const useStyles = createUseStyles({
	container: {
    margin: '50px 20px 50px 20px',
		padding: '20px 50px',
		fontSize: '12px',
    backgroundColor: '#667289',
    color: 'white'
	},
	title: {
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: '600'
	},
	mainDescription: {
    textIndent: '2em',
	},
  subContainer: {
    paddingTop: '20px'
	},
	keyword: {
    textDecoration: 'underline',
    fontWeight: '600',
    padding: '2px 5px'
	},
	subtitle: {
		fontWeight: '600',
    padding: '2px 5px'
	},
	description: {
		textIndent: '2em',
	}
})

export const Card = ({title, mainDescription, content}: IProps) => {
	const classes = useStyles()
	return (
		<>
			<div className={classes.container}>
				<div className={classes.title} >{title}</div>
				<div className={classes.mainDescription} >{mainDescription}</div>
				{content.map(({keyword, subtitle, description}) => (
					<div className={classes.subContainer}>
						<span className={classes.keyword}>{keyword}: </span>
						<span className={classes.subtitle}>{subtitle} </span>
						<span className={classes.description}>{description}</span>
					</div>
				))}
			</div>
		</>
	)
}