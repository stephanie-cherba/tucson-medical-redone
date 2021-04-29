import React from 'react'
import {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'
import {AboutUs,
	Backdrop,
	FAQ,
	Footer,
	Header,
	Help,
	Home,
	Maps,
	News,
	Policies,
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
			<Footer />
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
			<Footer />
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
			<Footer />
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
			<Footer />
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
			<Footer />
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
			<Footer />
		</>
	)

	const FAQComponent = () => (
		<>
			<Header handleMenuIsOpenToggle={handleMenuIsOpenToggle} />
			{menuIsOpen ? (
				<>
					<SideDrawer handleMenuIsOpenToggle={handleMenuIsOpenToggle} />
					<Backdrop handleBackdropClick={handleBackdropClick} />
				</>
			) : null}
			<FAQ />
			<Footer />
		</>
	)

	const MapsComponent = () => (
		<>
			<Header handleMenuIsOpenToggle={handleMenuIsOpenToggle} />
			{menuIsOpen ? (
				<>
					<SideDrawer handleMenuIsOpenToggle={handleMenuIsOpenToggle} />
					<Backdrop handleBackdropClick={handleBackdropClick} />
				</>
			) : null}
			<Maps />
			<Footer />
		</>
	)

	const PoliciesComponent = () => (
		<>
			<Header handleMenuIsOpenToggle={handleMenuIsOpenToggle} />
			{menuIsOpen ? (
				<>
					<SideDrawer handleMenuIsOpenToggle={handleMenuIsOpenToggle} />
					<Backdrop handleBackdropClick={handleBackdropClick} />
				</>
			) : null}
			<Policies />
			<Footer />
		</>
	)
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/' component={HomeComponent} />
					<Route path='/request-appointment' component={AppointmentComponent} />
					<Route path='/news' component={NewsComponent} />
					<Route path='/tools' component={ToolsComponent} />
					<Route path='/about-us' component={AboutComponent} />
					<Route path='/help' component={HelpComponent} />
					<Route path='/weight-loss-faq' component={FAQComponent} />
					<Route path='/maps' component={MapsComponent} />
					<Route path='/policies' component={PoliciesComponent} />
				</Switch>
			</Router>
		</div>
	)
}
