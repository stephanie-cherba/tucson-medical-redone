import {
	FormControlLabel, 
	FormLabel, 
	Radio, 
	RadioGroup, 
	TextField
} from '@material-ui/core'
import React, {useState} from 'react'
import {createUseStyles} from 'react-jss'
import {useForm} from 'react-hook-form'
import {TidBits} from './TidBits'
import {TimeSelect} from './TimeSelect'
import {AppointmentDialog} from './AppointmentDialog'
import {DateSelect} from './DateSelect'

const useStyles = createUseStyles({
	container: {
		padding: '40px 150px 60px 150px',
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
	formContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '12px'
	},
	form: {
		width: '40%'
	},
	patientTypeContainer: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr'
	},
	input: {
		marginBottom: '20px !important'
	},
	button: {
		width: '80px',
		height: '25px'
	},
	borderBox: {
		border: '1px solid #b87333',
		padding: '20px',
		marginBottom: '20px'
	},
	boxBody: {
		paddingBottom: '20px'
	},
	importantNote: {
		color: 'red'
	}
})

export interface IValidationFormData {
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
}

export const RequestAppointment = () => {
	const [firstName, setFirstName] = useState<IValidationFormData['firstName']>('')
	const [lastName, setLastName] = useState<IValidationFormData['lastName']>('')
	const [patientType, setPatientType] = useState<IValidationFormData['patientType']>('new patient')
	const [chartNumber, setChartNumber] = useState<IValidationFormData['chartNumber']>(0)
	const [DOB, setDOB] = useState<IValidationFormData['DOB']>('')
	const [phoneNumber, setPhoneNumber] = useState<IValidationFormData['phoneNumber']>('')
	const [emailAddress, setEmailAddress] = useState<IValidationFormData['emailAddress']>('')
	const [appTime, setAppTime] = useState<IValidationFormData['appTime']>('')
	const [appDay, setAppDay] = useState<IValidationFormData['appDay']>('')
	const [appMonth, setAppMonth] = useState<IValidationFormData['appMonth']>('')
	const [appYear, setAppYear] = useState<IValidationFormData['appYear']>('')
	const [appType, setAppType] = useState<IValidationFormData['appType']>('weight loss')
	const [appDescription, setAppDescription] = useState<IValidationFormData['appDescription']>('')
	const [provider, setProvider] = useState<IValidationFormData['provider']>('')
	const [comments, setComments] = useState<IValidationFormData['comments']>('')
	const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)

	const {
		register,
		errors,
		handleSubmit,
		formState,
		control
	} = useForm<IValidationFormData>({
		mode: 'onChange',
		defaultValues: {
			firstName,
			lastName,
			chartNumber,
			DOB,
			phoneNumber,
			emailAddress,
			appTime,
			appDay,
			appMonth,
			appYear,
			appDescription,
			provider,
			comments
		}
	})

	const handlePatientTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPatientType(e.target.value as IValidationFormData['patientType'])
 }

	const handleAppTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAppType(e.target.value as IValidationFormData['appType'])
 }

	const handleDialogOpen = () => {
    setIsDialogOpen(true)
 }

  const handleDialogClose = () => {
    setIsDialogOpen(false)
 }

	const onSubmit = (data: IValidationFormData) => {
		setFirstName(data.firstName!)
		setLastName(data.lastName!)
		setPatientType(patientType!)
		setChartNumber(data.chartNumber!)
		setDOB(data.DOB!)
		setPhoneNumber(data.phoneNumber!)
		setEmailAddress(data.emailAddress!)
		setAppTime(data.appTime!)
		setAppDay(data.appDay!)
		setAppMonth(data.appMonth!)
		setAppYear(data.appYear!)
		setAppType(appType!)
		setAppDescription(data.appDescription!)
		setProvider(data.provider!)
		setComments(data.comments!)
		handleDialogOpen()
	}
	const classes = useStyles()
	return (
		<>
			<TidBits />
			<div className={classes.container}>
				<div className={classes.title}>Request an Appointment</div>
				<p className={classes.body}>Please feel free to use this form to request an appointment online. The information that
					you provide here is only used in regards to your appointment and is not used for other purposes.</p>
				<p className={classes.body}>Our staff will contact you as soon as possible to confirm your appointment and answer 
					any questions that you may have. Unless you indicate otherwise, we will attempt to leave a message for you if you 
					are not in when we call. If you provided an email address, you will automatically receive a copy of your request and
					we will email a confirmation of the actual scheduled appointment instead of calling by telephone.</p>
				<div>
					<span className={classes.subtitle}>Please Note: </span>
					<span>Your appointment is not considered scheduled until we have confirmed it with you by telephone or email.</span>
				</div>
			</div>
			<div className={classes.formContainer}>
				<form className={classes.form}>
					<TextField 
						variant='outlined'
						className={classes.input}
						inputRef={register({
							required: 'First name is required',
							minLength: {
								value: 2,
								message: 'First name should have at least 2 characters'
							},
							maxLength: {
								value: 100,
								message:
									'First name should have less than 500 characters'
							}
						})}
						label='First Name'
						name='firstName'
						placeholder='first name'
						fullWidth
						helperText={errors.firstName?.message}
						error={!!errors.firstName}
					/>
					<TextField 
						variant='outlined'
						className={classes.input}
						inputRef={register({
							required: 'Last name is required',
							minLength: {
								value: 2,
								message: 'Last name should have at least 2 characters'
							},
							maxLength: {
								value: 100,
								message:
									'Last name should have less than 500 characters'
							}
						})}
						label='Last Name'
						name='lastName'
						placeholder='Last Name'
						fullWidth
						helperText={errors.lastName?.message}
						error={!!errors.lastName}
					/>
					<div className={classes.patientTypeContainer}>
						<div>
							<FormLabel component='legend'>Patient is a</FormLabel>
							<RadioGroup 
								name='patientType' 
								value={patientType} 
								className={classes.input}
								onChange={handlePatientTypeChange}
							>
								<FormControlLabel 
									value='new patient' 
									control={<Radio />} 
									label='New Patient'
								/>
								<FormControlLabel 
									value='existing patient' 
									control={<Radio />} 
									label='Existing Patient'
								/>
							</RadioGroup>
						</div>
						<div className={classes.borderBox} >
							<div className={classes.importantNote} >
								Please Note: New (NEVER been here) patients require more time for their first visit so the range of 
								appointment times is limited. We will confirm your request as soon as possible. If you have ever been 
								seen in this office you must select "Existing Patient".
							</div>
						</div>
					</div>
					<div className={classes.borderBox} >
						<div className={classes.boxBody} >
							To properly identify you in our records it is very helpful if you happen to know your chart number, it can 
							be located on medication bottle s which came form our on-site pharmacy:
						</div>
						<TextField 
							variant='outlined'
							className={classes.input}
							inputRef={register({
								maxLength: {
									value: 8,
									message:
										'Chart number should have less than 8 digits'
								},
								pattern: {
									value: /^[1-9]?\d*$/,
									message: 'Chart number should ony contain numbers'
								}
							})}
							label='Chart number'
							name='chartNumber'
							placeholder='Chart number'
							fullWidth
							helperText={errors.chartNumber?.message}
							error={!!errors.chartNumber}
						/>
					</div>
					<TextField 
						variant='outlined'
						className={classes.input}
						inputRef={register({
							required: 'Date of birth is required',
							minLength: {
								value: 6,
								message:
									'Date of birth should have at least than 6 digits'
							},
							maxLength: {
								value: 10,
								message:
									'Date of birth should have less than 10 digits'
							},
							pattern: {
								value: /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/,
								message: 'Not a valid date of birth'
							}
						})}
						label='Date of birth (mm/dd/yyyy)'
						name='DOB'
						placeholder='Date of birth'
						fullWidth
						helperText={errors.DOB?.message}
						error={!!errors.DOB}
					/>
					<TextField 
						variant='outlined'
						className={classes.input}
						inputRef={register({
							required: 'Phone number is required',
							maxLength: {
								value: 12,
								message:
									'Phone number should have less than 13 digits'
							},
							pattern: {
								value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
								message: 'Not a valid phone number'
							}
						})}
						label='Phone number (xxx-xxx-xxxx)'
						name='phoneNumber'
						placeholder='Phone number'
						fullWidth
						helperText={errors.phoneNumber?.message}
						error={!!errors.phoneNumber}
					/>
					<TextField 
						variant='outlined'
						className={classes.input}
						inputRef={register({
							required: 'Email address is required',
							minLength: {
								value: 7,
								message:
									'Email should have at least than 7 digits'
							},
							pattern: {
								value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
								message: 'Not a valid email address'
							}
						})}
						label='Email'
						name='emailAddress'
						placeholder='Email'
						fullWidth
						helperText={errors.emailAddress?.message}
						error={!!errors.emailAddress}
					/>
					<TimeSelect 
						control={control}
						appTime={appTime}
					/>
					<FormLabel component='legend'>Date Requested</FormLabel>
					<DateSelect 
						control={control}
						appDay={appDay}
						appMonth={appMonth}
						appYear={appYear}
					/>
					<FormLabel component='legend'>Appointment Type</FormLabel>
					<RadioGroup 
						name='appType' 
						value={appType} 
						className={classes.input}
						onChange={handleAppTypeChange}
					>
						<FormControlLabel 
							value='weight loss' 
							control={<Radio />} 
							label='Weight Loss'
						/>
						<FormControlLabel 
							value='other' 
							control={<Radio />} 
							label='Other Appointment Type (Describe appointment below)'
						/>
					</RadioGroup>
					<div className={classes.borderBox} >
						<TextField 
							variant='outlined'
							inputRef={register()}
							label='Describe Appointment'
							name='appDescription'
							placeholder='Describe Appointment'
							fullWidth
							helperText={errors.appDescription?.message}
							error={!!errors.appDescription}
						/>
					</div>
					<div className={classes.borderBox} >
						<TextField 
							variant='outlined'
							className={classes.input}
							inputRef={register()}
							label='Preferred Provider'
							name='provider'
							placeholder='provider'
							fullWidth
							helperText={errors.provider?.message}
							error={!!errors.provider}
						/>
						<div>
							You may see any provider you wish, and if no provider preference is given, we will schedule you with 
							whichever provider has availability.
						</div>
					</div>
					<TextField 
						variant='outlined'
						className={classes.input}
						inputRef={register()}
						label='Other Comments'
						name='comments'
						placeholder='comments'
						fullWidth
						helperText={errors.comments?.message}
						error={!!errors.comments}
					/>
					<button 
						className={classes.button}
						onClick={handleSubmit(onSubmit)}
						>Submit</button>
				</form>
			</div>
			<AppointmentDialog 
				firstName={firstName}
				lastName={lastName}
				patientType={patientType}
				chartNumber={chartNumber}
				DOB={DOB}
				phoneNumber={phoneNumber}
				emailAddress={emailAddress}
				appTime={appTime}
				appDay={appDay}
				appMonth={appMonth}
				appYear={appYear}
				appType={appType}
				appDescription={appDescription}
				provider={provider}
				comments={comments}
				handleDialogClose={handleDialogClose}
				isDialogOpen={isDialogOpen}
			/>
		</>
	)
}
