/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */

import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"
import ContactUs from "./Pages/ContactUs"
import "./App.css"

function App() {

	return (

		<BrowserRouter>

			<Routes>

				<Route path='/' element={<LandingPage/>}/>

				<Route path='/contact-us' element={<ContactUs/>}/>

			</Routes>

		</BrowserRouter>

	)

}



export default App

