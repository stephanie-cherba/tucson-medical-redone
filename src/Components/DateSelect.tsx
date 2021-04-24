import {FormControl, InputLabel, MenuItem, Select} from '@material-ui/core'
import React from 'react'
import {Control, Controller} from 'react-hook-form'
import {createUseStyles} from 'react-jss'
import {IValidationFormData} from './RequestAppointment'

const useStyles = createUseStyles({
	select: {
		margin: '0 20px 40px 0',
		width: '75px'
	},
})

interface IDateSelectProps {
	appDay?: string
	appMonth?: string
	appYear?: string
	control: Control<IValidationFormData>
}

export const DateSelect = ({
	appDay,
	appMonth,
	appYear,
	control
}: IDateSelectProps) => {
	const classes = useStyles()
	return (
		<>
			<FormControl>
				<InputLabel>Day</InputLabel>
				<Controller
					control={control}
					name='appDay'
					as={
						<Select
							value={appDay}
							className={classes.select}
						>
							<MenuItem value=''>Select a Day</MenuItem>
							<MenuItem value='1'>1</MenuItem>
							<MenuItem value='2'>2</MenuItem>
							<MenuItem value='3'>3</MenuItem>
							<MenuItem value='4'>4</MenuItem>
							<MenuItem value='5'>5</MenuItem>
							<MenuItem value='6'>6</MenuItem>
							<MenuItem value='7'>7</MenuItem>
							<MenuItem value='8'>8</MenuItem>
							<MenuItem value='9'>9</MenuItem>
							<MenuItem value='10'>10</MenuItem>
							<MenuItem value='11'>11</MenuItem>
							<MenuItem value='12'>12</MenuItem>
							<MenuItem value='13'>13</MenuItem>
							<MenuItem value='14'>14</MenuItem>
							<MenuItem value='15'>15</MenuItem>
							<MenuItem value='16'>16</MenuItem>
							<MenuItem value='17'>17</MenuItem>
							<MenuItem value='18'>18</MenuItem>
							<MenuItem value='19'>19</MenuItem>
							<MenuItem value='20'>20</MenuItem>
							<MenuItem value='21'>21</MenuItem>
							<MenuItem value='22'>22</MenuItem>
							<MenuItem value='23'>23</MenuItem>
							<MenuItem value='24'>24</MenuItem>
							<MenuItem value='25'>25</MenuItem>
							<MenuItem value='26'>26</MenuItem>
							<MenuItem value='27'>27</MenuItem>
							<MenuItem value='28'>28</MenuItem>
							<MenuItem value='29'>28</MenuItem>
							<MenuItem value='30'>30</MenuItem>
							<MenuItem value='31'>31</MenuItem>
						</Select>
					}
				/>
			</FormControl>
			<FormControl>
				<InputLabel>Month</InputLabel>
				<Controller
					control={control}
					name='appMonth'
					as={
						<Select
							value={appMonth}
							className={classes.select}
						>
							<MenuItem value=''>Select a Month</MenuItem>
							<MenuItem value='January'>January</MenuItem>
							<MenuItem value='February'>February</MenuItem>
							<MenuItem value='March'>March</MenuItem>
							<MenuItem value='April'>April</MenuItem>
							<MenuItem value='May'>May</MenuItem>
							<MenuItem value='June'>June</MenuItem>
							<MenuItem value='July'>July</MenuItem>
							<MenuItem value='August'>August</MenuItem>
							<MenuItem value='September'>September</MenuItem>
							<MenuItem value='October'>October</MenuItem>
							<MenuItem value='November'>November</MenuItem>
							<MenuItem value='December'>December</MenuItem>
						</Select>
					}
				/>
			</FormControl>
			<FormControl>
				<InputLabel>Year</InputLabel>
				<Controller
					control={control}
					name='appYear'
					as={
						<Select
							value={appYear}
							className={classes.select}
						>
							<MenuItem value=''>Select a Year</MenuItem>
							<MenuItem value='2021'>2021</MenuItem>
							<MenuItem value='2022'>2022</MenuItem>
						</Select>
					}
				/>
			</FormControl>
		</>
	)
}