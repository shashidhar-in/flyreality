/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import Pagination from "./Pagination"

export default function NewsAndEvents() {
	const newsArr=[{Headline:"Welcoming Wilcox!",date:"JUN 5, 2023",imgUrl:"https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC9lMGZkMTU0M2E1ZjhlZDBmMTU3ZTZiYWQ5ZTA2MGFkNy5qcGVn/webp/800/800"},
		{Headline:"Up to $20,000 of Financial Assistance for First-Time Homebuyers",date:"APR 21, 2023",imgUrl:"https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC9jYTAzNmY5MTg4YTkxMTM5MWE0YmFjN2NlNTAxMTc0NC5qcGVn/webp/800/800"},
		{Headline:"Preparing Your Home for Potential Spring Flooding",date:"APR 13, 2023",imgUrl:"https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC8wNWM3NzE2ZTcyNTc2NDgxZDE4YzMzNjlkY2IwYTYyYy5qcGVn/webp/800/800"}
	
	]
	const [currentPage, setCurrentPage] = useState(1)

	const newsPerPage = 3

	const indexOfLastNews = currentPage * newsPerPage
	const indexOfFirstNews = indexOfLastNews - newsPerPage
	const currentNews = newsArr.slice(indexOfFirstNews, indexOfLastNews)

	const totalNewsPages = Math.ceil(newsArr.length / newsPerPage)

	const handleNextNewsPage = () => {
		setCurrentPage((prevPage) => Math.min(prevPage + 1, totalNewsPages))
	}

	const handlePrevNewsPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
	}

	return (
		<div>
			<div className="section-header w-full flex flex-col gap-4 md:items-center text-lg md:text-4xl p-2 ">
				<h1>NEWS & EVENTES</h1>
				<hr className="border-red-500 border-2 w-[100px]" />

				<div className="news-cards-container flex gap-5 flex-wrap w-full ">
					{newsArr.map((news,idx)=>{
						return <div key={idx} className="news-card p-3 hover:shadow-2xl cursor-pointer  transition-all min-w-[350px] max-w-[370px] min-h-[300px] max-h-[320px]">
							<img src={news.imgUrl} className="w-full h-[70%] object-cover" alt="news-image" />
							<h2 className="text-sm mt-2"style={{color:"#b3a774"}}>{news.date}</h2>
							<h1 className="text-lg font-normal">{news.Headline}</h1>
						</div>
					})}
				</div>
				<Pagination
					currentPage={currentPage}
					totalPages={totalNewsPages}
					handlePrevPage={handlePrevNewsPage}
					handleNextPage={handleNextNewsPage}
				/>
			</div>
			<div className="w-full flex items-center justify-center">
				<a href="#" className="text-sm bg-red-500 text-white px-[30px] py-[15px]  text-center"><h2>VISIT OUT BLOG</h2></a>
			</div>
		</div>
	)
}
