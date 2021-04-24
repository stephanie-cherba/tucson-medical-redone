import React from 'react'
import {createUseStyles} from 'react-jss'
import {TextAndLine} from './TextAndLine'
import {TidBits} from './TidBits'

const useStyles = createUseStyles({
	container: {
		padding: '0 150px',
		fontSize: '12px',
	},
	contactUsContainer: {
		padding: '40px 150px 0 150px',
		fontSize: '12px',
	},
	title: {
		fontSize: '18px',
		fontWeight: '600',
	},
	subtitle: {
		fontSize: '12px',
		fontWeight: '600',
	},
	body: {
		textIndent: '2em',
	},
	schedule: {
		textIndent: '4em'
	},
	'@media (max-width: 700px)': {
		container: {
			padding: '0 50px',
		},
		contactUsContainer: {
			padding: '30px 50px',
		},
	}
})

export const AboutUs = () => {
	const classes = useStyles()
	return (
		<>
			<TidBits />
			<div className={classes.container}>
				<div className={classes.title}>About Us</div>
				<p className={classes.body}>Golden West Weight Loss has served the Tucson area since 1984. We are a 
				multi-faceted progressive bariatric (weight loss) center dedicated to your needs. Our team of medical 
				professionals at Golden West Weight Loss is dedicated to providing prompt, friendly, and courteous 
				service to our patients. Our healthcare providers have over 83 years of combined experience providing 
				weight loss and other health care services. Our knowledgeable staff is available to assist you with all 
				your needs, whether it is weight management, smoking cessation, or other needs. We explain the treatment 
				options in detail and then review the pros and cons in a language you can understand. For our patients 
				who need care by other medical specialties, we have a referral network of the finest specialists around.</p>
				<p className={classes.body}>At Golden West Weight Loss, we pride ourselves in practicing medicine the old 
				fashioned way. Our patients come first and are treated like family. We know our family members by name, not 
				just a number. If you have tried and failed before with other diets and weight loss programs or perhaps smoking 
				cessation, you will feel comfortable with our "welcome back" approach. We are here to offer that support, 
				whenever you are ready. Golden West Weight Loss has become the largest medical weight loss center because of 
				your trust and confidence. We earn your trust the old fashioned way, through hard work and attention to detail, 
				and we are dedicated to preserving that trust. We are ready when you are.</p>
				<p className={classes.body}>Golden West Weight Loss is located at 230 W. Ajo Way. We are between 6th and 12th 
				Avenue, on the north side of Ajo Way, next to Hollinger Elementary School. Maps of our location 
				are <a href='/maps'>here</a>.</p>
				<div className={classes.body}>Golden West Weight Loss office hours are:</div>
				<div className={classes.schedule}>Monday through Friday - 7:00 AM to 6:00 PM (appointments 7:30 - 5:30)</div>
				<div className={classes.schedule}>Saturday - 7:00 AM to 2:30 PM (appointments 7:30 - 2:00)</div>
				<p className={classes.body}>For your convenience, Golden West Weight Loss accepts personal checks as well as 
				MasterCard, Visa, Discover, and American Express cards.</p>
			</div>	
			<div className={classes.container}>
				<span> NEW FEATURE: </span>
				<span>Appointments may be requested online <a href='/requestappointment'>here</a></span>
			</div>
			<div className={classes.contactUsContainer}>
				<div className={classes.title}>Contact Us</div>
				<div>If you have any questions about this site or Golden West Medical Center, P.C. (DBA Golden West Weight Loss), 
					you can contact us via:</div>
				<div className={classes.subtitle}>Email</div>
				<div>info@TucsonMedical.com</div>
				<div className={classes.subtitle}>Mail</div>
				<div>Golden West Weight Loss</div>
				<div>230 W Ajo Way</div>
				<div>Tucson, Arizona 85713</div>
				<div className={classes.subtitle}>Phone</div>
				<div>(520) 792 - 1966)</div>
				<div className={classes.subtitle}>Fax</div>
				<div>(520) 628 - 8035)</div>
			</div>
			<TextAndLine
					withoutBorder
					text={
						<span>Your feedback and suggestions are always welcome Please email us at 
							<span style={{fontWeight: 600}}> suggestions@TucsonMedical.com</span>
						</span>
					}
				/>	
		</>
	)
}
