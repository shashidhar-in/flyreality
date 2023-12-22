/* eslint-disable react/prop-types */
import React from "react"
import { FaCircle, FaRegCircle } from "react-icons/fa"
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"

const Pagination = ({ currentPage, totalPages, handlePrevPage, handleNextPage }) => {
	return (
		<div className="pagination w-full flex flex-col  md:flex-row justify-between gap-3 items-center mt-4">
			<div></div>
			<span className="mx-2 flex items-center justify-center gap-2 text-sm">
				{Array.from({ length: totalPages }).map((_, idx) => (
					<div key={idx}>{currentPage === idx + 1 ? <FaCircle /> : <FaRegCircle />}</div>
				))}
			</span>
			<div className="pagination-buttons" style={{ color: "white" }}>
				<button
					onClick={handlePrevPage}
					disabled={currentPage === 1}
					className={`p-2 m-1 ${
						currentPage === 1 ? "cursor-not-allowed bg-gray-300" : "cursor-pointer bg-gray-700 hover:bg-gray-800 transition-all"
					}`}
				>
					<MdArrowBackIos size={20} />
				</button>
				<button
					onClick={handleNextPage}
					disabled={currentPage === totalPages}
					className={`p-2 m-1 ${
						currentPage === totalPages ? "cursor-not-allowed bg-gray-300" : "cursor-pointer bg-gray-700 hover:bg-gray-800 transition-all"
					}`}
				>
					<MdArrowForwardIos size={20} />
				</button>
			</div>
		</div>
	)
}

export default Pagination
