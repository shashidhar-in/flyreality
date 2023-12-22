import React, { useEffect, useRef, useState } from "react"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

export default function NavigationBar() {
	const [navBarOpen, setNavBarOpen] = useState(false)
	const [searchBarToggle,setSearchBarToggle]=useState(false)
	const node = useRef()


	const toggleNavbar = () => {
		setSearchBarToggle(false)
		setNavBarOpen(!navBarOpen)
	}
	const toggleSearchBar=()=>{
		setNavBarOpen(false)
		setSearchBarToggle(!searchBarToggle)
	}
	const handleClickOutside = (e) => {
		if (node.current && !node.current.contains(e.target)) {
			// Click occurred outside the navbar elements, close both menu and search bar
			setNavBarOpen(false)
			setSearchBarToggle(false)
		}
	}

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [])

	return (
		<div className="navbar-wrapper w-full bg-transparent absolute top-0 z-10 text-white" ref={node}>
			<div className="main-navbar relative  pt-[80px] pb-[25px] hidden md:flex items-center justify-around">
				<div className="logo md:h-[60px] lg:h-[90px]">
					<img
						src="https://www.destinationhomes.com/images/logo-header.svg"
						className="w-full h-full"
						alt="logo"
					/>
				</div>
				<div className="center-list">
					<ul className="flex items-center justify-center text-[16px]">
						<li className="nav-list-item">
							<a href="#" className="nav-link py-[12px] px-[20px] ">
                WHERE WE BUILD
							</a>
						</li>
						<li className="nav-list-item">
							<a href="#" className="nav-link py-[12px] px-[20px] ">
                QUICK MOVE-IN HOMES
							</a>
						</li>
						<li className="nav-list-item">
							<a href="#" className="nav-link py-[12px] px-[20px] ">
                FLOOR PLANS
							</a>
						</li>
						<li className="nav-list-item">
							<a href="#" className="nav-link py-[12px] px-[20px] " onClick={toggleSearchBar}>
								<img
									src="https://www.destinationhomes.com/images/icon-search-white.svg"
									alt="search-icon-white"
									className="h-[15px] w-[15px]"
								/>
							</a>
						</li>
					</ul>
				</div>
				<div className="menu-div">
					<div
						className="menu-icon w-[100px] nav-link cursor-pointer flex items-center justify-center gap-2 transition"
						onClick={toggleNavbar}
					>
            MENU{" "}
						{navBarOpen ? (
							<MdClose 
								style={{
									width: "18px",
									height: "18px",
								}}
							/>
						) : (
							<FiMenu 
								style={{
									width: "18px",
									height: "18px",
								}}
							/>
						)}
					</div>
				</div>
			</div>
			<div className="main-navbar-mobile h-[60px] bg-white flex md:hidden items-center justify-between">
				<a href="#" className="nav-link py-[12px] px-[20px] " onClick={toggleSearchBar}>
					<img
						src="https://www.destinationhomes.com/images/icon-search-black.svg"
						alt="search-icon-white"
						className="h-[15px] w-[15px]"
					/></a>
				<div className="logo h-[40px]">
					<img
						src="https://www.destinationhomes.com/images/logo-header.svg"
						className="w-full h-full"
						alt="logo"
					/>
				</div>
				<div className="menu-div">
					<div
						className="menu-icon  nav-link cursor-pointer mr-2"
						onClick={toggleNavbar}
					>
						{navBarOpen ? (
							<MdClose 
								style={{
									width: "23px",
									height: "23px",
									color:"red"
								}}
							/>
						) : (
							<FiMenu 
								style={{
									width: "23px",
									height: "23px",
									color:"red"

								}}
							/>
						)}
					</div>
				</div>
				
			</div>
			{searchBarToggle &&<div className="search-bar absolute md:translate-x-[50%] w-full p-4" style={{background:"#b3a774"}}>
				<input type="text" placeholder="Search for Communities, Homes and Plans" className="px-[20px] py-[15px] w-[100%] md:w-[600px] border-[1px] border-gray-500"/>
			</div>}
			{navBarOpen && <div className="nav-links sticky md:fixed right-0 top-[40px] md:top-[150px] w-[100%x] md:w-[350px] h-auto p-10 bg-slate-50 text-gray-900 ">
				<ul className="flex flex-col gap-5 justify-center pt-5"><li className="nav-list-item">
					<a href="/" 
						className="nav-link  hover:text-red-500 transition-all py-2"
						style={{fontWeight:"400",padding: "8px"}}>HOME PAGE</a><hr /></li>
				<li className="nav-list-item">
					<a href="#" 
						className="nav-link hover:text-red-500 transition-all py-2"
						style={{fontWeight:"400",padding: "8px"}}>FIND YOUR HOME</a><hr /></li>
				<li className="nav-list-item">
					<a href="#" 
						className="nav-link hover:text-red-500 transition-all py-2"
						style={{fontWeight:"400",padding: "8px"}}>PHOTO & VIDEO GALLERY</a><hr /></li>
				<li className="nav-list-item">
					<a href="#" 
						className="nav-link hover:text-red-500 transition-all py-2"
						style={{fontWeight:"400",padding: "8px"}}>WHY DESTINATION HOMES</a><hr /></li>
				<li className="nav-list-item">
					<a href="#" 
						className="nav-link hover:text-red-500 transition-all py-2"
						style={{fontWeight:"400",padding: "8px"}}>HOME BUYING GUIDE</a><hr /></li>
				<li className="nav-list-item">
					<a href="/contact-us" 
						className="nav-link hover:text-red-500 transition-all py-2"
						style={{fontWeight:"400",padding: "8px"}}>CONTACT US</a><hr /></li>
				</ul></div>}
		</div>
	)
}
