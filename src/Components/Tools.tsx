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
	'@media (max-width: 1024px)': {
		container: {
			padding: '0 50px',
		},
	}
})

export const Tools = () => {
	const classes = useStyles()
	return (
		<>
			<TidBits />
			<div className={classes.container}>
				<div className={classes.title}>Tools</div>
				<p className={classes.body}>This is a selection that we consider to be valuable 
				and relevant tools for health and fitness. Since we have built this site to satisfy 
				the needs of our members, please feel free to suggest other items that we should 
				consider adding to any section of this page.</p>
				<Card title='Other Tools' content={[
					{
						keyword: 'Menu Planner',
						description: "This interactive menu planner is designed to guide daily food and meal choices based on one day's calorie allowance."
					},
					{
						keyword: 'BMI Calculator',
						description: 'Find out your body mass index (BMI). A healthy BMI lowers your risk of heart disease, hypertension, and diabetes.'
					},
					{
						keyword: 'Food Servings Exchanges',
						description: 'See which food servings can be exchanged for each other.'
					},
					{
						keyword: 'Robi Nutrition Assistant',
						description: 'The Nutrition Assistant is an easy to use device that tracks nutrition intake, including calories, carbohydrates, protein, fat, and fiber.'
					},
					{
						keyword: 'Resources and Recommended Reading',
						description: 'These books are valuable resources.'
				}]}
				/>
				<Card title='Links' 
					mainDescription='These links are some that we have found to be especially valuable. For your convenience, these links will open in a new window.'
					content={[
						{
							keyword: 'USDA National Nutrient Database',
							description: 'Look up calories and other nutrition information in many types of food. This huge database includes everything from individual ingredients such as an apple to meals such as pizza and TV dinners. This is the same databse that we use for our Menu Planner.'
						},
						{
							keyword: 'The Role of Vitamins and Minerals',
							description: 'Good information about the role of vitamins and minerals in your health.'
						},
						{
							keyword: 'Nutrition.gov',
							description: 'A service of the National Agricultural Library, U.S. Deptartment of Agriculture.'
						},
						{
							keyword: 'Food and Nutrition Information Center',
							description: 'Dietary Guidelines for Americans.'
						},
						{
							keyword: 'MyPyramid.gov',
							description: 'Steps to a healthier you with the new food pyramid.'
						},
						{
							keyword: 'WebMD Weight Loss Clinic',
							description: 'Beyond a diet, a solution for life.'
						},
						{
							keyword: 'Delicious Decisions',
							description: 'From the American Heart Associations. You can have it all: delicious food and better health!'
						},
						{
							keyword: 'Recipe Corner',
							description: 'Foods that are good for you... foods that taste good. From the American Institute for Cancer Research.'
						},
						{
							keyword: 'Food and Nutrition Information Center',
							description: 'Dietary Guidelines for Americans.'
					}]}
				/>
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
