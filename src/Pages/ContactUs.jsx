/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import NavigationBar from "../Reusables/NavigationBar"
import Footer from "../Reusables/Footer"
import ContactUsForm from "../Reusables/ContactUsForm"
import Careers from "../Reusables/Careers"
import Warranty from "../Reusables/Warranty"
import TradePartner from "../Reusables/TradePartner"

export default function ContactUs() {
	const tabs=[{Title:"CONTACT FORM",
		imgUrl:"https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC8yNTg3ODAxNThlMGUzMzU0MjFjNzdiNzNjODVlNzc0Ni5qcGVn/webp/2000/2000"
	},{Title:"CAREERS",imgUrl:"https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC8xOWI3ZTQwMzgwNjFjYmIyMjhkY2UzMjNmN2RlMmFlNy5wbmc=/webp/2000/2000"},
	{Title:"WARRANTY REQUEST",imgUrl:"https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC8wMzhhYTY0N2NlYzgxODdjOWFiNmM4MDJlY2I0OWRmNS5qcGVn/webp/2000/2000"},
	{Title:"BECOME A TRADE PARTNER",imgUrl:"https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC8xNTBmODU1ZGFkYTFjZmUyZjRhNTNlNTQ2YmUwNGIyNy5qcGVn/webp/2000/2000"}]

	const [selectedTab,setSelectedTab]=useState(tabs[0])
	const handleTabChange=(tab)=>{
		setSelectedTab(tab)
	}
	
	return (
		<div className='relative min-h-[100vh]'>
			<NavigationBar />
			<div className="hero-wrapper relative h-[500px] md:h-[600px] lg:h-[700px] w-[100%] transition-all">
			
				<div className="hero-image h-full w-full block">
					<img src={selectedTab.imgUrl}
						alt="hero image" className="object-cover w-full h-full blur-[2px]" /></div>
				<div className="hero-bottom-design absolute bottom-5 w-full flex flex-col items-center justify-center h-[70px] text-white">
					<div className="heading w-full flex flex-col items-center justify-center">
						<h1 className="text-6xl">CONTACT US</h1>
					</div>
					<hr className="border-red-500 border-4 w-[150px] mt-6" />
				</div>
			</div>
			<div className="tabs-div w-full h-[100px] bg-white flex items-center justify-center">{
				tabs.map((tab,idx)=>{
					return <div key={idx} 
						onClick={()=>handleTabChange(tab)}
						className={`tab px-[10px] py-[7px] md:px-[30px] md:py-[15px] text-xs md:text-2xl ${tab.Title===selectedTab.Title?"bg-red-500 text-white transition-all":"bg-transparent text-black"}`}>
						<h1>{tab.Title}</h1>
					</div>
				})
			}</div>
			{selectedTab.Title === "CONTACT FORM"&& <ContactUsForm/>}
			{selectedTab.Title==="CAREERS" && <Careers/>}
			{selectedTab.Title==="WARRANTY REQUEST" && <Warranty/>}
			{selectedTab.Title==="BECOME A TRADE PARTNER" && <TradePartner/>}

			<Footer/>
		</div>
	)
}
