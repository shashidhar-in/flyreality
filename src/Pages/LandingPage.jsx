/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import HeroVideo from "../assets/HomePage_short_lr.mp4"
import NavigationBar from "../Reusables/NavigationBar"
import { FaLongArrowAltRight } from "react-icons/fa"
import { FaRegCircle } from "react-icons/fa"
import { FaCircle } from "react-icons/fa"
import { MdArrowBackIos } from "react-icons/md"
import { MdArrowForwardIos } from "react-icons/md"
import { BsFillSignTurnRightFill } from "react-icons/bs"
import { IoBedOutline } from "react-icons/io5"
import { MdOutlineBathtub } from "react-icons/md"
import Pagination from "../Reusables/Pagination"
import Blogs from "../Reusables/Blogs"
import NewsAndEvents from "../Reusables/NewsAndEvents"
import { FiHome } from "react-icons/fi"
import Footer from "../Reusables/Footer"








export default function LandingPage() {
	const HomesArr=[
		{Title:"SINGLE FAMILY", Homes:["https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC9hYmNkMDYyMjhmZWIzMzkzMzA2ZmYwNDUwNTA5YTEwYi5qcGVn/exact/webp/2000/1125",
			"https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC81NDQ4Y2Q4MzU0ZTAyOTU3MmRhOGY1MGY0NTBjYWRiNS5qcGVn/exact/webp/2000/1125",
			"https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC9lYjI0ODhhMGI4NGI4MTE3NjMzMzA1NzFmOGJiYzEzYi5qcGVn/exact/webp/2000/1125",
			"https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC84NzVhYjEyNWRjMWY3MjQzODFmMDFhMDQ4NTAzM2YwYS5qcGVn/exact/webp/2000/1125"]},
		{Title:"TOWNHOMES", Homes:[
			"https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC83MzI0Y2E4YjBiMjViODFjNGNlNzI3ZTBjMTQ3OGUxNS5qcGVn/exact/webp/2000/1125",
			"https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC84NjhkZjY0YWRmYmRmYTM3NDczOTE0N2FhZTkzZjU0MC5qcGVn/exact/webp/2000/1125",
			"https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC8zZjY2NmVlNzk5ZDc5ZDcwYWI3NDhjMThkMmRkMzg5OC5qcGVn/exact/webp/2000/1125"
		]}]
	const imgArr=[{Title:"SINGLE FAMILY HOMES",
		Subtitle:"find your new home today",
		imgUrl:"https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC9iZjJhMzJkMjQyODBjMjA3OGRhMTljNzFmYzQ3YmM5OC5qcGVn/webp/1300/1300"},
	{Title:"TOWNHOMES",
		Subtitle:"find your new home today",
		imgUrl:"https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC82NmNmMWRjNjAxYzIzNDE0N2MxOGNmNTA5ZTYwMjYwOS5qcGVn/webp/1300/1300"}]

	



	const [selectedOptionInSeection2,setSelectedOptioninSection2]=useState(HomesArr[0])
	const handleSelection=(item)=>{
		setSelectedOptioninSection2(item)
	}
	useEffect(()=>{
		console.log(selectedOptionInSeection2)
	},[selectedOptionInSeection2])

	const [currentPage, setCurrentPage] = useState(1)
	const homesPerPage = 3

	const indexOfLastHome = currentPage * homesPerPage
	const indexOfFirstHome = indexOfLastHome - homesPerPage
	const currentHomes = selectedOptionInSeection2.Homes.slice(
		indexOfFirstHome,
		indexOfLastHome
	)

	const totalPages = Math.ceil(
		selectedOptionInSeection2.Homes.length / homesPerPage
	)

	const handleNextPage = () => {
		setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
	}

	const handlePrevPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
	}

	
	return (
		<div className='relative min-h-[100vh]'>
			<NavigationBar />
			<div className="hero-wrapper relative h-[500px] md:h-[600px] lg:h-[700px] w-[100%] transition-all">
				<div className="hero-video h-full w-full hidden md:block">
					<video
						src="https://s3.amazonaws.com/buildercloud/fffa60a1b1692fc4bc91dd962360ed51/HomePage_short_lr.mp4"
						preload='auto'
						loop autoPlay muted playsInline
						className='h-video h-full w-full object-cover object-center'
					/>

				</div>
				<div className="hero-image h-full w-full block md:hidden">
					<img src='https://s3.amazonaws.com/buildercloud/3ebf8cd41e5c31144729855b18f8d5dc.jpeg' alt="hero image" className="object-cover w-full h-full" /></div>
				<div className="hero-bottom-design absolute -bottom-5 w-full flex h-[70px] md:h-[50px]">
					<div className="bg-white flex-1 hidden md:block"></div>
					<div className="bg-transparent flex-1">
						<img src="https://www.destinationhomes.com/images/carousel-edge.png" className="w-full h-full object-cover"/></div>
					<div className="bg-white flex-1 hidden md:block"></div>
				</div>
			</div>
			<div className="hero-support-quote mt-5 md:h-[150px] text-center hidden md:flex items-center justify-center md:text-5xl">
				<h1 className="text-red-500">EXCEPTIONAL HOMES,</h1> <h1 className="text-gray-700">&nbsp;LASTING COMMUNITIES</h1>
			</div>
			<div className="content-sectoion-1 flex gap-2 m-2 md:gap-1  relative flex-col md:flex-row mt-10 text-white w-full h-[50vh]">
				{imgArr.map((item,idx)=>{
					return <div className="content-item-div h-full flex flex-row md:flex-col gap-0 md:gap-2 flex-1 items-end p-5  md:items-center
                     justify-between md:justify-center " key={idx} style={{backgroundImage:`url(${item.imgUrl})`,backgroundSize:"cover"}}>
						<h1 className="text-3xl">{item.Title}</h1>
						<h2 className="text-lg font-semibold hidden md:block">{item.Subtitle}</h2>
						<button className="p-3 rounded-full bg-red-500"><FaLongArrowAltRight color="#fff"/>
						</button>
					</div>
				})}
			</div>
			<div className="content-section-2  min-h-[100vh] hidden md:flex gap-10 flex-col items-center justify-start">
				<h1 className="section-heading text-4xl text-gray-600">FEATURED {selectedOptionInSeection2.Title}</h1>
				<hr className="border-red-500 border-2 w-[100px]" />
				<div className="flex gap-2">
					{HomesArr.map((item,idx)=>{
						return <div  key={idx}>
							<div onClick={()=>{handleSelection(item)}}
								className={`px-[40px] py-[20px] transition-all cursor-pointer ${
									selectedOptionInSeection2.Title === item.Title ? "bg-red-600 bg-opacity-95 text-white" : "bg-gray-100" 
								}`}
							><h1 style={{fontWeight:"700"}}>{item.Title}</h1></div>
						</div>
					})}
					
				</div>
				<div className="featured-homes flex gap-5 w-full flex-wrap justify-center">
					{currentHomes.map((home, idx) => {
						return (
							<div
								key={idx}
								className="home-card shadow-lg cursor-pointer hover:scale-105 transition-all min-w-[300px] max-w-[320px] min-h-[450px] max-h-[420px]"
							>
								<img src={home} alt="home-image"  className="w-full h-[40%] object-cover object-center "/>
								<div className="property-details">
									<div className="address-and-price flex">
										<h1 className="flex-1 m-3">997 W. 1550 S <br /><span className="text-sm font-light">CLEARFIELD, UT LOT: 104</span></h1>
										<div className="sign-and-price flex items-center justify-center gap-3 flex-1">
											<BsFillSignTurnRightFill color="red"/>
											<h2 className="text-gray-700 bg-gray-100 p-2">$499,900</h2>
										</div>
									</div>
									<hr className="m-2"/>
									<div className="building-info">
										<h1 className="text-red-500 w-[30%] m-4">Wilcox Farms Middleton</h1>
									</div>
									<hr className="m-2"/>
									<div className="card-footer flex items-center justify-between mt-5 m-2 p-2" >
										<div className="property-info flex gap-4">
											<div className="property-beds">
												<IoBedOutline color="#b3a774" size={40} />
												<h2 className="font-light text-sm">3 BEDS</h2>
											</div>
											<div className="property-bath">
												<MdOutlineBathtub color="#b3a774" size={40}/>

												<h2 className="font-light text-sm">3.5 BATHS</h2>
											</div><div className="property-bath">
												<img src="https://www.destinationhomes.com/images/icon-sqft.svg" className="h-[40px] w-[40px]" alt="sq-ft-icon" />
												<h2 className="font-light text-sm">2,512 SQ FT</h2>
											</div>
										</div>
										<button className="p-3 rounded-full bg-red-500"><FaLongArrowAltRight color="#fff"/>
										</button>
									</div>

								</div>
							</div>
						)
					})}
				</div>
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					handlePrevPage={handlePrevPage}
					handleNextPage={handleNextPage}
				/>
			</div>
			<div className="content-section-3 news-section flex flex-col items-center justify-center">
				<NewsAndEvents/>
			</div>
			<div className="content-section-4 w-full mt-20 flex flex-col gap-2">
				<Blogs/>
			</div>
			<div className="footer">
				<Footer/>
			</div>
		</div>
	)
}
