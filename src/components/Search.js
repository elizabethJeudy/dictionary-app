import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import SearchResults from "./components/SearchResults";

// api documentation link: https://dictionaryapi.dev/

export default function Search() {
	let [keyword, setKeyword] = useState("");

	// grabs the searched word from api
	function handleResponse(response) {
		console.log(response.data[0]);
		console.log(response.data[0].meanings);
	}

	// displays when searching for keyword
	function search(event) {
		event.preventDefault();
		// creates API key when user searches for a word
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
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
			<SearchResults />
		</div>
	);
}
