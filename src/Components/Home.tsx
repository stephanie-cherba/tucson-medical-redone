import React from 'react'
import {createUseStyles} from 'react-jss'
import { Card } from './Card'
import { TextAndLine } from './TextAndLine'
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
	addressContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	subtitle: {
		fontSize: '12px',
		fontWeight: 600
	}
})

export const Home = () => {
	const classes = useStyles()
	return (
		<>
			<TidBits />
			<div className={classes.container}>
				<div className={classes.title}>Welcome to Golden West Weight Loss</div>
				<p className={classes.body}>
					Golden West Weight Loss has served the Tucson area since 1984. We are
					a progressive bariatric (weight loss) clinic offering multiple
					programs that are dedicated to your needs. Our team of medical
					professionals at Golden West Weight Loss is dedicated to providing
					prompt, friendly, and courteous service to our patients. Our
					healthcare providers have over 83 years of combined experience
					providing weight loss and other health care services. Our
					knowledgeable staff is available to assist you with all your needs,
					whether it is weight loss, smoking cessation, or other needs. We
					explain the treatment options in detail and then review the pros and
					cons in a language you can understand. For our patients who need care
					by other medical specialties, we have a referral network of the finest
					specialists around.
				</p>
				<p className={classes.body}>
					At Golden West Weight Loss, we pride ourselves in practicing medicine
					the old fashioned way. Our patients come first and are treated like
					family. We know our family members by name, not just a number. If you
					have tried and failed before with other diets and bariatric (weight
					loss) programs or perhaps smoking cessation, you will feel comfortable
					with our "welcome back" approach. We are here to offer that support,
					whenever you are ready. Golden West Weight Loss has become the largest
					medical weight loss center in Arizona because of your trust and
					confidence. We earn your trust the old fashioned way, through hard
					work and attention to detail, and we are dedicated to preserving that
					trust. We are ready when you are.
				</p>
				<p>Some <a href='/weightlossfaq'>Frequently Asked Questions</a> and info about HCG.</p>
				<Card title='Latest Site News' content={[
					{
						keyword: 'Office News', 
						subtitle: 'Medical Assistant Positions Available (full time / part time)', 
						description: 'We are accepting applications for Medical Assistant positions. Medical office experience is required and applicants must be bi-lingual. There is one full time position available. This is a great team to work with and the benefits and opportunities are excellent. Contact Roger in our office at (520) 792-1966 to schedule an interview.'
					},
					{
						keyword: 'Office News',
						subtitle: 'Now offering Lipotropic Injections.',
						// tslint:disable-next-line: quotemark
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
				<div className={classes.addressContainer}>
					<div className={classes.subtitle}>Golden West Weight Loss</div>
					<div> 230 W. Ajo Way</div>
					<div>Tucson, Arizona 85713</div>
					<div>
						<span>Phone: </span>
						<span>(520) 792 - 1966</span>
					</div>
				</div>
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
