import {
	Dialog, 
	DialogActions, 
	DialogContent, 
	DialogTitle, 
	List, 
	ListItem, 
	ListItemText
} from '@material-ui/core'
import React from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
	button: {
		width: '80px',
		height: '25px'
	}
})

interface IDialogProps {
	firstName: string
	lastName: string
	chartNumber?: number
	patientType: 'new patient' | 'existing patient'
	DOB: string
	phoneNumber: string
	emailAddress: string
	appTime?: string
	appDay?: string
	appMonth?: string
	appYear?: string
	appType?: 'weight loss' | 'other'
	appDescription?: string
	provider?: string
	comments?: string
	handleDialogClose: () => void,
	isDialogOpen: boolean
}

export const AppointmentDialog = ({
	firstName,
	lastName,
	chartNumber,
	patientType,
	DOB,
	phoneNumber,
	emailAddress,
	appTime,
	appDay,
	appMonth,
	appYear,
	appType,
	appDescription,
	provider,
	comments,
	handleDialogClose,
	isDialogOpen
}: IDialogProps) => {
	const classes = useStyles()
	return (
		<Dialog onClose={handleDialogClose} open={isDialogOpen}>
				<DialogTitle >Appointment Requested</DialogTitle>
				<DialogContent>
					<List>
						<ListItem>
							<ListItemText primary={`Name: ${firstName} ${lastName}`} />
						</ListItem>
						<ListItem>
							<ListItemText primary={patientType === 'new patient' ? 'New Patient' : 'Existing Patient'} />
						</ListItem>
						<ListItem>
							<ListItemText primary={chartNumber ? `Chart Number: ${chartNumber}` : null} />
						</ListItem>
						<ListItem>
							<ListItemText primary={`Date of Birth: ${DOB}`} />
						</ListItem>
						<ListItem>
							<ListItemText primary={`Phone Number: ${phoneNumber}`} />
						</ListItem>
						<ListItem>
							<ListItemText primary={`Email: ${emailAddress}`} />
						</ListItem>
						<ListItem>
							<ListItemText primary={appTime ? `Requested Time: ${appTime}` : null} />
						</ListItem>
						<ListItem>
							<ListItemText primary={appDay && appMonth && appYear ? `Requested Date: ${appMonth} ${appDay}, ${appYear}` : null} />
						</ListItem>
						<ListItem>
							<ListItemText primary={`Type of Appointment: ${appType}`} />
						</ListItem>
						<ListItem>
							<ListItemText primary={appDescription ? `Appointment Description: ${appDescription}` : null} />
						</ListItem>
						<ListItem>
							<ListItemText primary={provider ? `Preferred Provider: ${provider}` : null} />
						</ListItem>
						<ListItem>
							<ListItemText primary={comments ? `Other Comments: ${comments}` : null} />
						</ListItem>
					</List>
				</DialogContent>
				<DialogActions>
					<button className={classes.button} onClick={handleDialogClose}>OK</button>
				</DialogActions>
			</Dialog>
	)
}
