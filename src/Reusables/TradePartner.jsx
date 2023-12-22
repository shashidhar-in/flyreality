import React from "react"

export default function TradePartner() {
	return (
		<div>
			<div className="w-full intro bg-gray-100 h-[500px] flex gap-10 flex-col md:flex-row px-[40px] py-[40px]">
				<div className="flex-1"><h1 className="text-2xl md:text-5xl">BECOME OUR PARTNER</h1>
					<hr className="border-red-500 border-[3px] w-[150px] mt-6" />
					<p className="md:text-2xl font-light md:leading-loose">
                        Is your company interested in working with Destination Homes in building some exceptional homes? Whether youre a painter, a framer, a cleaner, or a material supplier, fill out our Trade Partner application below.
					</p>
				</div>
				<div className="flex-1"><img src="https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC8yYzQ5ZmIyYTBhNDNjOWFjMDI5ZmVhYWY1YjlhZDM5Yy5qcGVn/webp/1200/1200" alt="" className="h-full w-full object-cover" /></div>
			</div>		
			<div className="w-[80%] ml-[10%] md:ml-[20%] mt-[10%]">
				<div className="download-section ">
					<h1 className="md:text-3xl">CLICK HERE TO DOWNLOAD OUR TRADE PARTNER APPLICATION
					</h1>
					<button href="#" className="bg-red-500 text-white px-[20px] py-[15px] mt-10"><h1 className="md:text-2xl">DOWNLOAD</h1></button>
				</div>
				<div className="resume-section  flex flex-col items-start mt-[10%]">
					<h1 className="md:text-3xl">UPLOAD & SEND US YOUR FILLED OUT TRADE APPLICATION FORM
					</h1>
					<input type="file"   accept="image/*, application/pdf" name="files-0"></input>
					<button href="#" className="bg-red-500 text-white px-[20px] py-[15px] mt-10">
						<h1 className="md:text-2xl">SUBMIT</h1>
					</button>
				</div>
			</div>
		</div>
	)
}
