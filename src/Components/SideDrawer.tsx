import React from 'react'
import {createUseStyles} from 'react-jss'
import {Link} from 'react-router-dom'

interface IProps {
	handleMenuIsOpenToggle: () => void
}

const useStyles = createUseStyles({
	container: {
		backgroundColor: '#909090',
		boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.5)',
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		justifyContent: 'center',
		maxWidth: '340px',
		position: 'fixed',
		right: 0,
		top: 0,
		transform: 'translateX(100%)',
		transition: 'transform 0.7s ease-out',
		width: '30%',
		zIndex: '200',
	},
	link: {
		color: 'white',
		fontSsize: '23px',
		textAlign: 'center',
		textDecoration: 'none',
		'&:hover &:active': {
			animation: 'shake 0.5s',
			animationIterationCount: '.4',
			fontSize: '26px',
		},
	},
	ul: {
		display: 'flex',
		flexDirection: 'column',
		height: '12%',
		justifyContent: 'center',
		listStyle: 'none',
		marginLeft: '-10%',
	},
})

export const SideDrawer = ({handleMenuIsOpenToggle}: IProps) => {
	const classes = useStyles()
	return (
		<div className={classes.container}>
			<ul className={classes.ul}>
				<Link to='/' className={classes.link}>
					Home
				</Link>
			</ul>
			<ul className={classes.ul}>
				<Link to='/RequestAppointment' className={classes.link}>
					Appointments
				</Link>
			</ul>
			<ul className={classes.ul}>
				<Link to='/News' className={classes.link}>
					News
				</Link>
			</ul>
			<ul className={classes.ul}>
				<Link to='/Tools' className={classes.link}>
					Tools
				</Link>
			</ul>
			<ul className={classes.ul}>
				<Link to='/AboutUs' className={classes.link}>
					About Us
				</Link>
			</ul>
			<ul className={classes.ul}>
				<Link to='/Help' className={classes.link}>
					Help/FAQ
				</Link>
			</ul>
		</div>
	)
}
