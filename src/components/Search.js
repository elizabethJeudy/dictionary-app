import React, { useState } from "react";
import "./Search.css";

export default function Search() {
	// displays when searching for keyword
	let [keyword, setKeyword] = useState("");
	function search(event) {
		event.preventDefault();
		alert(`Searching for ${keyword} definition`);
	}

	// pulls the keyword typed in search
	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	return (
		<div className="container searchContainer">
			<h1>Dictionary</h1>

			<form onSubmit={search}>
				<input
					type="search"
					//
					onChange={handleKeywordChange}
					placeholder="What word would you like to search?"
					className="search-input"
				/>
			</form>
		</div>
	);
}
