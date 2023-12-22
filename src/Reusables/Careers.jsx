import React from "react"

export default function Careers() {
	return (
		<div>
			<div className="w-full intro bg-gray-100 h-auto md:h-[500px] flex gap-10 flex-col md:flex-row px-[40px] py-[40px]">
				<div className="flex-1"><h1 className="text-2xl md:text-5xl">WELCOME HOME! WE ARE LOOKING FOR SOME AMAZING PEOPLE IN THE CAREERS LISTED BELOW.</h1>
					<hr className="border-red-500 border-[3px] w-[150px] mt-6" />
					<p className="md:text-2xl font-light md:leading-loose">Besides working for an amazing company, here are some perks that come along with working at Destination Homes:</p>
					<ul>
						<li >401(K) matching after 1 year of employment</li>
						<li>Health, dental, and vision benefits</li>
						<li>Life insurance, short and long term disability</li>
						<li>Work along side some really fun people :)</li>
					</ul>
					<a href="#" className="text-red-500 md:text-xl">If youre looking for a career, click here to tell us about yourself.</a>
				</div>
				<div className="flex-1"><img src="https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC85NjgyYTk5NTQ0MzY2NDBiOWU5ZjM2MjRjMzFhODU3Mi5wbmc=/webp/1200/1200" alt="" className="h-full w-full object-cover" /></div>
			</div>
		</div>
	)
}
