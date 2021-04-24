import {FormControl, InputLabel, MenuItem, Select} from '@material-ui/core'
import React from 'react'
import {Control, Controller} from 'react-hook-form'
import {createUseStyles} from 'react-jss'
import {IValidationFormData} from './RequestAppointment'

const useStyles = createUseStyles({
	select: {
		margin: '0 20px 40px 0',
		width: '200px'
	},
})

interface ITimeSelectProps {
	appTime?: string
	control: Control<IValidationFormData>
}

export const TimeSelect = ({appTime, control}: ITimeSelectProps) => {
	const classes = useStyles()
	return (
		<FormControl>
			<InputLabel>Time Requested</InputLabel>
			<Controller
					control={control}
					name='appTime'
					as={
					<Select
						value={appTime}
						className={classes.select}
					>
						<MenuItem value=''>Select a Time</MenuItem>
						<MenuItem value={'7:30 AM'}>7:30 AM</MenuItem>
						<MenuItem value={'7:45 AM'}>7:45 AM</MenuItem>
						<MenuItem value={'8:00 AM'}>8:00 AM</MenuItem>
						<MenuItem value={'8:15 AM'}>8:15 AM</MenuItem>
						<MenuItem value={'8:30 AM'}>8:30 AM</MenuItem>
						<MenuItem value={'8:45 AM'}>8:45 AM</MenuItem>
						<MenuItem value={'9:00 AM'}>9:00 AM</MenuItem>
						<MenuItem value={'9:15 AM'}>9:15 AM</MenuItem>
						<MenuItem value={'9:30 AM'}>9:30 AM</MenuItem>
						<MenuItem value={'9:45 AM'}>9:45 AM</MenuItem>
						<MenuItem value={'10:00 AM'}>10:00 AM</MenuItem>
						<MenuItem value={'10:15 AM'}>10:15 AM</MenuItem>
						<MenuItem value={'10:30 AM'}>10:30 AM</MenuItem>
						<MenuItem value={'10:45 AM'}>10:45 AM</MenuItem>
						<MenuItem value={'11:00 AM'}>11:00 AM</MenuItem>
						<MenuItem value={'11:15 AM'}>11:15 AM</MenuItem>
						<MenuItem value={'11:30 AM'}>11:30 AM</MenuItem>
						<MenuItem value={'11:45 AM'}>11:45 AM (Saturdays ONLY)</MenuItem>
						<MenuItem value={'12:00 PM'}>12:00 PM (Saturdays ONLY)</MenuItem>
						<MenuItem value={'12:15 PM'}>12:15 PM (Saturdays ONLY)</MenuItem>
						<MenuItem value={'12:30 PM'}>12:30 PM (Saturdays ONLY)</MenuItem>
						<MenuItem value={'12:45 PM'}>12:45 PM (Saturdays ONLY)</MenuItem>
						<MenuItem value={'1:00 PM'}>1:00 PM (Saturdays ONLY)</MenuItem>
						<MenuItem value={'1:15 PM'}>1:15 PM (Saturdays ONLY)</MenuItem>
						<MenuItem value={'1:30 PM'}>1:30 PM</MenuItem>
						<MenuItem value={'1:45 PM'}>1:45 PM</MenuItem>
						<MenuItem value={'2:00 PM'}>2:00 PM</MenuItem>
						<MenuItem value={'2:15 PM'}>2:15 PM (except Saturdays)</MenuItem>
						<MenuItem value={'2:30 PM'}>2:30 PM (except Saturdays)</MenuItem>
						<MenuItem value={'2:45 PM'}>2:45 PM (except Saturdays)</MenuItem>
						<MenuItem value={'3:00 PM'}>3:00 PM (except Saturdays)</MenuItem>
						<MenuItem value={'3:15 PM'}>3:15 PM (except Saturdays)</MenuItem>
						<MenuItem value={'3:30 PM'}>3:30 PM (except Saturdays)</MenuItem>
						<MenuItem value={'3:45 PM'}>3:45 PM (except Saturdays)</MenuItem>
						<MenuItem value={'4:00 PM'}>4:00 PM (except Saturdays)</MenuItem>
						<MenuItem value={'4:15 PM'}>4:15 PM (except Saturdays)</MenuItem>
						<MenuItem value={'4:30 PM'}>4:30 PM (except Saturdays)</MenuItem>
						<MenuItem value={'4:45 PM'}>4:45 PM (except Saturdays)</MenuItem>
						<MenuItem value={'5:00 PM'}>5:00 PM (except Saturdays)</MenuItem>
						<MenuItem value={'5:15 PM'}>1:15 PM (except Saturdays)</MenuItem>
						<MenuItem value={'5:30 PM'}>5:30 PM (except Saturdays)</MenuItem>
					</Select>
					}
				/>
		</FormControl>
	)
}