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
	subTitle: {
 		fontSize: '12px',
		 fontWeight: '600'
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

export const Help = () => {
	const classes = useStyles()
	return (
		<>
			<TidBits />
			<div className={classes.container}>
				<div className={classes.title}>Help and Frequently Asked Questions</div>
				<p className={classes.body}>We have compiled a list of frequently asked questions 
					(our weight loss program FAQ is <a href='weightlossfaq'> here</a>). If we have not 
					answered a question that you have, just ask us.</p>
				<div className={classes.subTitle}>Do you prescribe medications over the internet or phone?</div>
				<p className={classes.body}>No! We practice proper and responsible medicine. Our prescriptions 
					require that you are seen by a health care professional.</p>
				<div className={classes.subTitle}>Will you ever sell or share my email address or 
					personal information?</div>
				<p className={classes.body}>This is an easy answer: NO. Personal information that you 
					provide to us is only for our use and is not shared with others. Please see 
					our <a href='/policies'> privacy policy</a> for more information.</p>
				<div className={classes.subTitle}>I have a suggestion, do you want to hear it?</div>
				<p className={classes.body}>Absolutely. We are providing services to you. Any way that 
					we can increase the quality of those services is something that we want to hear about. 
					We have placed links at the bottom of our pages for your convenience. Feel free to use 
					them at any time.</p>
				<div className={classes.subTitle}>Do you accept advertising?</div>
				<p className={classes.body}>At this time we do not but it is planned for the near future. Feel 
					free to contact us about this.</p>
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
