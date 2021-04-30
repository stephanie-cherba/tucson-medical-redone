import React from 'react'
import {createUseStyles} from 'react-jss'
import {Link} from 'react-router-dom'

interface IProps {
	handleMenuIsOpenToggle: () => void
}

const useStyles = createUseStyles({
	container: {
		backgroundColor: '#b87333',
		boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.5)',
		display: 'flex',
		flexDirection: 'column',
		maxWidth: '340px',
		position: 'fixed',
		right: 0,
		top: 0,
		transform: 'translateX(0%)',
		transition: 'transform 0.7s ease-out',
		width: '40%',
		zIndex: '2',
		padding: '10px 0'
	},
	link: {
		color: 'white',
		fontSize: '12px',
		textAlign: 'center',
		textDecoration: 'none',
	},
	ul: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		listStyle: 'none',
		padding: '10px 0',
		margin: 0
	},
})

export const SideDrawer = ({handleMenuIsOpenToggle}: IProps) => {
	const classes = useStyles()
	return (
		<div className={classes.container}>
			<ul className={classes.ul}>
				<Link to='/' className={classes.link} onClick={handleMenuIsOpenToggle}>
					Home
				</Link>
			</ul>
			<ul className={classes.ul}>
				<Link to='/request-appointment' className={classes.link} onClick={handleMenuIsOpenToggle}>
					Appointments
				</Link>
			</ul>
			<ul className={classes.ul}>
				<Link to='/news' className={classes.link} onClick={handleMenuIsOpenToggle}>
					News
				</Link>
			</ul>
			<ul className={classes.ul}>
				<Link to='/tools' className={classes.link} onClick={handleMenuIsOpenToggle}>
					Tools
				</Link>
			</ul>
			<ul className={classes.ul}>
				<Link to='/about-us' className={classes.link} onClick={handleMenuIsOpenToggle}>
					About Us
				</Link>
			</ul>
			<ul className={classes.ul}>
				<Link to='/help' className={classes.link} onClick={handleMenuIsOpenToggle}>
					Help/FAQ
				</Link>
			</ul>
		</div>
	)
}
