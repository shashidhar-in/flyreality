import React from "react"
import { FiHome } from "react-icons/fi"

export default function Footer() {
	return (
		<div>
			<div className="footer-main flex flex-col items-center justify-center min-h-[600px] pt-20"
				style={{backgroundImage:"url(https://www.destinationhomes.com/images/footer-bg.jpg)",backgroundSize:"cover"}}
			>
				<div className="logo">
					<img src="https://www.destinationhomes.com/images/logo-mark.png" alt="" />
				</div>
				<h3 className="font-light">9350 S. 150 E. #220 Sandy, UT</h3>
				<div>
					<div className="Footer_nav uppercase flex gap-4 flex-col md:flex-row text-center">
						<ul className="list-unstyled Footer_nav-menu flex gap-3 flex-col md:flex-row"><li><a className="" href="/homes">Find Your New Home</a></li>
							<li><a className="" href="/photo-gallery">Galleries</a></li>
							<li><a className="" href="/about-us">Why Destination Homes</a></li>
							<li><a className="" href="/our-process">Homebuying Guide</a></li>
							<li><a className="" href="/contact-us">Contact Us</a></li>
							<li><a className="" href="/accessibility">Accessibilty</a></li></ul>
					</div>
				</div>
				<ul className="list-unstyled text-center font-extralight"><li><a className="" href="/terms">Terms</a></li><li><a className="" href="/privacy-policy">Privacy Policy</a></li><li><a className="" href="/accessibility">Accessibility</a></li></ul>
				<div className="footer-end h-[100px] bg-gray-600 w-full  flex flex-col md:flex-row items-center justify-around text-white">
					<FiHome/>
					<h3>©2023 Destination Homes. All Rights Reserved.</h3>
					<h3>site By Shashidhar Mittapalli</h3>
				</div>
			</div>
		</div>
	)
}
