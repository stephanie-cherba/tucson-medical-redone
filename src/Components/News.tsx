import React from 'react'
import {createUseStyles} from 'react-jss'
import {Card} from './Card'
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

export const News = () => {
	const classes = useStyles()
	return (
		<>
			<TidBits />
			<div className={classes.container}>
				<div className={classes.title}>News</div>
				<p className={classes.body}>Use this page to view current news (scroll down) as well as 
				the most recent site news. In addition to our site news, there are currently 26 news 
				categories to select from. We will try to remember your preferred news category the next 
				time you visit this page.</p>
				<Card title='Latest Site News' content={[
					{
						keyword: 'Office News', 
						subtitle: 'Medical Assistant Positions Available (full time / part time)', 
						description: 'We are accepting applications for Medical Assistant positions. Medical office experience is required and applicants must be bi-lingual. There is one full time position available. This is a great team to work with and the benefits and opportunities are excellent. Contact Roger in our office at (520) 792-1966 to schedule an interview.'
					},
					{
						keyword: 'Office News',
						subtitle: 'Now offering Lipotropic Injections.',
						description: "We are now offering lipotropic injections to help our patients lose weight. Our 'Lipotropic Extreme' injections are compounded for us and are now available either individually or in combination with our other programs. Schedule an appointment today and see why lipotropic injections are already one of our most popular programs."
					},
					{
						keyword: 'Site News',
						subtitle: 'Now offering Lipotropic Injections.',
						description: 'We have added a new feature to the menu planner - detailed nutrition information. Whenever there are items in the menu there will be a link to "This Menu with Full Nutritional Details". The details include percentages of daily values such as RDI, DV, and DRV. As always let us know if you have any suggestions on how we can improve the menu planner system.'
					},
					{
						keyword: 'Site News',
						subtitle: 'Advanced Version of Menu Planner now online',
						description: 'The next generation of the interactive menu planner is now online. Check it out and let us know what you think. You can find it here.'
					}]}
				/>
				<TextAndLine
					withoutBorder
					text={
						<span>Your feedback and suggestions are always welcome Please email us at 
							<span style={{fontWeight: 600}}> suggestions@TucsonMedical.com</span>
						</span>
					}
				/>
			</div>
		</>
	)
}
