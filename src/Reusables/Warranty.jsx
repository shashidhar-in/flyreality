import React, { useState } from "react"

export default function Warranty() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		cityOfInterest: "",
		communityOfInterest: "",
		howDidYouHear: "",
		comments: "",
	})

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		// Handle form submission logic here
		console.log("Form submitted:", formData)
	}

	return (
		<div>
			<div className="w-full intro bg-gray-100 h-auto md:h-[500px] flex gap-10 flex-col md:flex-row px-[40px] py-[40px]">
				<div className="flex-1"><h1 className="text-2xl md:text-5xl">HAVE QUESTIONS? WE ARE HERE TO HELP!</h1>
					<hr className="border-red-500 border-[3px] w-[150px] mt-6" />
					<p className="md:text-2xl font-light md:leading-loose">
Each Destination Homes home comes with a home warranty and is required to pass several quality control inspections throughout the construction process. Our Home Buyers Warranty guarantees that you will be treated fairly, are protected in instances of product failure, and have access to Destination Homes contractors in case of an emergency.

Please refer to your <span className="text-red-500">Homeowners Manual</span> for verification on warranty items.

					</p>
				</div>
				<div className="flex-1"><img src="https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC8yYzQ5ZmIyYTBhNDNjOWFjMDI5ZmVhYWY1YjlhZDM5Yy5qcGVn/webp/1200/1200" alt="" className="h-full w-full object-cover" /></div>
			</div>	
            
			<div className="contact-form mt-20 flex items-center justify-center flex-col">
				<div className="heading w-full flex flex-col items-center justify-center">
					<h3 className="text-5xl font-light text-gray-700">WARRENTY FORM</h3>
					<hr className="border-red-500 border-[3px] w-[150px] mt-6" />
				</div>
				<div className="w-[80%]"> 
					<form onSubmit={handleSubmit} className="grid grid-cols-1  md:grid-cols-2 md:gap-4 mt-20">
						<div className="mb-4  col-span-2 md:col-span-1">
							<label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="firstName">
            FIRST NAME *
							</label>
							<input
								type="text"
								id="firstName"
								name="firstName"
								value={formData.firstName}
								onChange={handleChange}
								className="w-full border-[1px] border-gray-500 text-xl p-2  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								required
							/>
						</div>
						<div className="mb-4 col-span-2 md:col-span-1">
							<label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="lastName">
            LAST NAME *
							</label>
							<input
								type="text"
								id="lastName"
								name="lastName"
								value={formData.lastName}
								onChange={handleChange}
								className="w-full border-[1px] border-gray-500 text-xl p-2  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								required
							/>
						</div>
						<div className="mb-4  col-span-2 md:col-span-1">
							<label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="firstName">
            ADDRESS *
							</label>
							<input
								type="text"
								id="firstName"
								name="firstName"
								value={formData.firstName}
								onChange={handleChange}
								className="w-full border-[1px] border-gray-500 text-xl p-2  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								required
							/>
						</div>
						<div className="mb-4 col-span-2 md:col-span-1">
							<label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="lastName">
            CITY *
							</label>
							<input
								type="text"
								id="lastName"
								name="lastName"
								value={formData.lastName}
								onChange={handleChange}
								className="w-full border-[1px] border-gray-500 text-xl p-2  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								required
							/>
						</div>
						<div className="mb-4  col-span-2 md:col-span-1">
							<label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="firstName">
            STATE *
							</label>
							<input
								type="text"
								id="firstName"
								name="firstName"
								value={formData.firstName}
								onChange={handleChange}
								className="w-full border-[1px] border-gray-500 text-xl p-2  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								required
							/>
						</div>
						<div className="mb-4 col-span-2 md:col-span-1">
							<label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="lastName">
            ZIP *
							</label>
							<input
								type="text"
								id="lastName"
								name="lastName"
								value={formData.lastName}
								onChange={handleChange}
								className="w-full border-[1px] border-gray-500 text-xl p-2  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								required
							/>
						</div>
						<div className="mb-4 col-span-2 md:col-span-1">
							<label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
            EMAIL
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								className="w-full border-[1px] border-gray-500 text-xl p-2  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							/>
						</div>
						<div className="mb-4 col-span-2 md:col-span-1">
							<label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="phone">
            PHONE
							</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								value={formData.phone}
								onChange={handleChange}
								className="w-full border-[1px] border-gray-500 text-xl p-2  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							/>
						</div>
						<div className="mb-4 col-span-2 md:col-span-1">
							<label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="cityOfInterest">
                                CLOSING DATE
								<input
									type="date"
									id="date"
									name="date"
									value={formData.phone}
									onChange={handleChange}
									className="w-full border-[1px] border-gray-500 text-xl p-2  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								/>
							</label>
						
						</div>
						<div className="mb-4 col-span-2 md:col-span-1">
							<label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="communityOfInterest">
            REGION *
							</label>
							<select
								name="communityOfInterest"
								value={formData.communityOfInterest}
								onChange={handleChange}
								className="w-full border-[1px] border-gray-500 text-xl p-2  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							>
								<option value="0" disabled="">Select One...</option>
								<option value="1">Davis County</option>
								<option value="2">Salt Lake/Utah Counties</option>
								
							</select>
						</div>
					
						<div className="mb-4 col-span-2">
							<label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="comments">
            WARRANTY ITEMS *
							</label>
							<textarea
								name="comments"
								value={formData.comments}
								onChange={handleChange}
								className="w-full border-[1px] border-gray-500 text-xl p-2  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								required
							/>
						</div>
						<div className="mb-4 col-span-1">
							<label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="comments">
            ATTACH IMAGES (MAX 5) *
							</label>
							<input
								type="file"
								accept="image/*, application/pdf"
								name="comments"
								value={formData.comments}
								onChange={handleChange}
								className="w-full border-[1px] border-gray-500 text-xl p-2  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								required
							/>
						</div>
						<div className="col-span-2">
							<button
								type="submit"
								className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 text-lg"
							>            SUBMIT

							</button>
						</div>
					</form></div>
				<div className="container w-full flex items-center justify-center text-lg" style={{fontFamily:"'Oswald', sans-serif"}}>
					<div className="flex flex-col md:flex-row gap-3 w-[80%] mt-20">
						<div className="flex-1">
							<div className="CustomContactCard_card flex flex-col items-center justify-center p-10 m-3  bg-slate-200">
								<h3 className="CustomContactCard_title">CORPORATE OFFICE</h3>
								<p className="CustomContactCard_address">9350 150 E #220, Sandy, UT 84070</p>
								<p className="CustomContactCard_phone">
              P: (801) 593-9993
								</p>
								<p className="CustomContactCard_phone">
              F: (801) 593-9992
								</p>
								<a href="https://goo.gl/maps/eJkjFi3YBM32MkRm6" target="blank" className="CustomContactCard_directions flex items-center justify-center gap-2">
									<img src="https://www.destinationhomes.com/images/icon-directions.svg" alt="" className="CustomDirections" />
									Get Directions
								</a>
							</div>
						</div>
						<div className="flex-1">
							<div className="CustomContactCard_card flex flex-col items-center justify-center p-10 m-3 bg-slate-200">
								<h3 className="CustomContactCard_title">Design Center</h3>
								<p className="CustomContactCard_address">2095 W. 200 N., Kaysville, Utah 84037</p>
								<p className="CustomContactCard_phone">
              P: (801) 593-9993
								</p>
								<p className="CustomContactCard_phone">
              F: (801) 593-9992
								</p>
								<a href="https://goo.gl/maps/eJkjFi3YBM32MkRm6" target="blank" className="CustomContactCard_directions flex items-center justify-center gap-2">
									<img src="https://www.destinationhomes.com/images/icon-directions.svg" alt="" className="CustomDirections" />
									Get Directions
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>	</div>
	)
}
