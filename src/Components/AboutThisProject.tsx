import React from 'react'
import {createUseStyles} from 'react-jss'
import {TextAndLine} from './TextAndLine'
import {TidBits} from './TidBits'

const useStyles = createUseStyles({
	container: {
		padding: '0 150px',
		fontSize: '12px',
	},
	title: {
		fontSize: '18px',
		fontWeight: '600',
	},
	body: {
		textIndent: '2em',
	},
	'@media (max-width: 700px)': {
		container: {
			padding: '0 50px',
		},
	}
})

export const AboutThisProject = () => {
	const classes = useStyles()
	return (
		<>
			<TidBits />
			<div className={classes.container}>
				<div className={classes.title}>About This Project</div>
				<p className={classes.body}>This project was made as a final project for my SWE 5063 graduate class at Kennesaw State
          University. The goal was to take a current live website that wasn't mobile friendly and make it so. I chose tucsonmedical.com
          as it was not mobile friendly and very outdated. I updated it a bit, but in order to make it even more modern, I think a new
          logo would be needed, and I am by no means a designer. To make it more mobile friendly, I: </p>
				<ul className={classes.body}>
          <li >added a humburger menu for smaller screens</li>
          <li >made the page widths responsive, so that the pages aren't super small on mobile devices</li>
          <li >used grids for the header and form to enable them to looks good on any size screen</li> 
        </ul>
				<p>If I had more time, I would:</p>
        <ul>
          <li>go more thoroughly through the text on each page to try to figure out what could be removed on the smaller page sizes, as 
            it is still a wall of text on each page</li>
          <li>figure out an API to incorporate for the tidbits section on each page rather than having the same hardcoded value for all of them</li>
        </ul>
				<div>Technologies used in this proect:</div>
        <ul>
          <li>typescript - for the added type safety</li>
          <li>react - for jsx</li>
          <li>react-router-dom - for SPA routes</li> 
          <li>react-hook-form - for form validation</li>
          <li>react-jss - for separating style classes in each component for the sake of decluttering</li>
        </ul>
        <div>Additionally, I used a bit of regex for the form validation for the chart number, date of birth, phone number, and email inputs.</div>
			</div>
		</>
	)
}