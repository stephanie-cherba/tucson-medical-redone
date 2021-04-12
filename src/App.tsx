import React from 'react'
import {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'
import {AboutUs,
	Backdrop,
	Header,
	Help,
	Home,
	News,
	RequestAppointment,
	SideDrawer,
	Tools,
} from './Components/index'

export const App = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false)
	const handleMenuIsOpenToggle = () => {
		setMenuIsOpen(!menuIsOpen)
	}
	const handleBackdropClick = () => {
		setMenuIsOpen(false)
	}

	const HomeComponent = () => (
		<>
			<Header handleMenuIsOpenToggle={handleMenuIsOpenToggle} />
			{menuIsOpen ? (
				<>
					<SideDrawer handleMenuIsOpenToggle={handleMenuIsOpenToggle} />
					<Backdrop handleBackdropClick={handleBackdropClick} />
				</>
			) : null}
			<Home />
		</>
	)

	const AppointmentComponent = () => (
		<>
			<Header handleMenuIsOpenToggle={handleMenuIsOpenToggle} />
			{menuIsOpen ? (
				<>
					<SideDrawer handleMenuIsOpenToggle={handleMenuIsOpenToggle} />
					<Backdrop handleBackdropClick={handleBackdropClick} />
				</>
			) : null}
			<RequestAppointment />
		</>
	)

	const NewsComponent = () => (
		<>
			<Header handleMenuIsOpenToggle={handleMenuIsOpenToggle} />
			{menuIsOpen ? (
				<>
					<SideDrawer handleMenuIsOpenToggle={handleMenuIsOpenToggle} />
					<Backdrop handleBackdropClick={handleBackdropClick} />
				</>
			) : null}
			<News />
		</>
	)

	const ToolsComponent = () => (
		<>
			<Header handleMenuIsOpenToggle={handleMenuIsOpenToggle} />
			{menuIsOpen ? (
				<>
					<SideDrawer handleMenuIsOpenToggle={handleMenuIsOpenToggle} />
					<Backdrop handleBackdropClick={handleBackdropClick} />
				</>
			) : null}
			<Tools />
		</>
	)

	const AboutComponent = () => (
		<>
			<Header handleMenuIsOpenToggle={handleMenuIsOpenToggle} />
			{menuIsOpen ? (
				<>
					<SideDrawer handleMenuIsOpenToggle={handleMenuIsOpenToggle} />
					<Backdrop handleBackdropClick={handleBackdropClick} />
				</>
			) : null}
			<AboutUs />
		</>
	)

	const HelpComponent = () => (
		<>
			<Header handleMenuIsOpenToggle={handleMenuIsOpenToggle} />
			{menuIsOpen ? (
				<>
					<SideDrawer handleMenuIsOpenToggle={handleMenuIsOpenToggle} />
					<Backdrop handleBackdropClick={handleBackdropClick} />
				</>
			) : null}
			<Help />
		</>
	)
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/' component={HomeComponent} />
					<Route path='/RequestAppointment' component={AppointmentComponent} />
					<Route path='/News' component={NewsComponent} />
					<Route path='/Tools' component={ToolsComponent} />
					<Route path='/AboutUs' component={AboutComponent} />
					<Route path='/Help' component={HelpComponent} />
				</Switch>
			</Router>
		</div>
	)
}
