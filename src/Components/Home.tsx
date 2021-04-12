import React from 'react'
import {createUseStyles} from 'react-jss'
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
				<p>Some Frequently Asked Questions and info about HCG.</p>
			</div>
		</>
	)
}
