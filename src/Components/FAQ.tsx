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
  list: {
    padding: '10px'
  },
  '@media (max-width: 700px)': {
		container: {
			padding: '0 50px',
		},
	}
})

export const FAQ = () => {
	const classes = useStyles()
	return (
		<>
			<TidBits />
			<div className={classes.container}>
				<div className={classes.title}>Weight Loss Program Frequently Asked Questions</div>
				<div className={classes.subTitle}>Program Highlights:</div>
				<ul className={classes.list}>
          <li>We have been doing this for over 30 years</li>
          <li>Many years combined experience from our health care providers</li>
          <li>We use effective medications that are tailored to your specific needs</li>
          <li>We provide support</li>
          <li>We teach proper eating habits and nutrition</li>
          <li>You see a health care provider with every visit</li>
          <li>The most effective medically supervised weight loss program in Tucson</li>
          <li>Thousands of success stories</li>
          <li>We provide guidance, sound advice, and the answers to your questions</li>
          <li>Feel good about yourself</li>
          <li>We offer a team approach</li>
          <li>Stop the cravings for food</li>
          <li>Our goal is to help you reach your goal</li>
          <li>Saturday appointments for your convenience</li>
          <li>More energy</li>
          <li>No fad diets! No scams! No HCG!</li>
        </ul>
				<div className={classes.subTitle}>What are the methods you recommend?</div>
				<p className={classes.body}>We recommend a healthy combination of proper diet, exercise, 
          and medications. Long term weight loss will require a lifestyle change and we try hard 
          to promote this in our patients.</p>
				<div className={classes.subTitle}>What happens on the first visit?</div>
				<p className={classes.body}>On you first visit quite a few things happen. First you will 
          fill out some forms to set you up as a patient and to give us a better idea of your needs. 
          Then we will weigh you, get your vital signs, and listen to your heart. We will perform a 
          couple types of body fat analysis to see how much you need to lose and properly determine 
          where your goals should be. We will discuss your goals and expectations and answer any 
          questions that you might have about the program. We will draw some blood to test for 
          problems in many areas including thyroid levels, diabetes, and cholesterol. You will be 
          given some information sheets to help you toward your goals. We will give you medications 
          (based on your individual needs) to take with you.</p>
				<div className={classes.subTitle}>What types of medications do you use?</div>
				<p className={classes.body}>We use a wide variety of time tested medications. The particular 
          prescription that you will receive will be based on your individual needs. These medications 
          do not contain ephedra or caffeine. We do not offer Meridia (and we never offered "Fen-Phen"). 
          Prescriptions are normally filled by our in-house pharmacy for your convenience and a 
          significant cost savings. These prescriptions are free with your weight loss visit. The 
          medications and instructions that are given are specific to each person's needs.</p>
        <div className={classes.subTitle}>Do you offer Lipotropic Injections (fat burner shots)?</div>
				<p className={classes.body}>Yes! We offer a specially compounded lipotropic formulation that is 
          designed to give you the best result. Lipotropic injections are available either by themselves 
          or in addition to our other programs. Lipotropic injections help patients lose weight by helping 
          your body break down fat. They also give patients a feeling of increased energy. We started 
          offering them in April 2014 and they quickly became one of our most popular programs.</p>
        <div className={classes.subTitle}>Do you offer HCG?</div>
				<p className={classes.body}>NO! The FDA, the American Medical Association, and numerous legitimate 
          scientific studies have stated it is useless for weight loss. Responsible doctors and other medical 
          providers do not consider HCG to be safe and effective for weight loss. More info is here.</p>
        <div className={classes.subTitle}>Do you accept insurance? Does insurance cover weight loss?</div>
				<p className={classes.body}>We no longer accept any insurance. This was a tough decision but we feel 
          strongly that this will help us keep our patient costs down. Generally, insurance does not cover 
          weight loss.</p>
        <div className={classes.subTitle}>What are the age requirements?</div>
				<p className={classes.body}>Patients under 18 years old must be accompanied by a parent or guardian. 
          Patients between 12 and 16 years old are accepted on a case by case basis.</p>
        <div className={classes.subTitle}>What if I have diabetes or high blood pressure?</div>
				<p className={classes.body}>We have a wide range of medications at our disposal. As long as your 
          diabetes and/or high blood pressure is under control we should be able to give you medications 
          that are appropriate.</p>
        <div className={classes.subTitle}>Can I be on the program if I am pregnant or breast feeding?</div>
				<p className={classes.body}>No. While the medications that we use have not been shown to cause 
          problems with pregnancy or breast feeding, we feel strongly that it is not worth taking chances.</p>
        <div className={classes.subTitle}>Will you keep my primary care provider informed?</div>
				<p className={classes.body}>Certainly. Just let us know where to send copies of reports.</p>
        <div className={classes.subTitle}>Can I order medications over the internet?</div>
				<p className={classes.body}>NO! We are a responsible medical practice and never prescribe or sell 
          medications over the internet. The only people who should order prescriptions over the internet are 
          those who have a prescription after having been physically seen and evaluated by a physician or other 
          properly licensed caregiver.</p>
        <div className={classes.subTitle}>Are there any side effects?</div>
				<p className={classes.body}>Side effects are possible with any medications. With this in mind, we work 
          hard to select medications that will work best for you. We will continue to adjust your prescription 
          to best fit your needs.</p>
        <div className={classes.subTitle}>How much and what level of exercise do I need to do?</div>
				<p className={classes.body}>Exercise is an important part of our weight loss program. We will discuss 
          levels of exercise that will best benefit you during your visit.</p>
        <div className={classes.subTitle}>Who qualifies to participate in these programs?</div>
				<p className={classes.body}>Not everyone qualifies for our weight loss program. For example, if you 
          only have a couple pounds to lose you may not qualify. If we determine that you do not qualify there 
          is no charge for the office consultation.</p>
        <div className={classes.subTitle}>Do you accept 'walk-in' patients?</div>
				<p className={classes.body}>Normally no. We are an extremely busy practice and walk-in patients often 
          have to wait too long to be seen. Please call first to see how busy we are at that moment.</p>

        <p>Be sure to check our <a href='/tools'>tools and links</a> page for much more!</p>

        <TextAndLine 
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
