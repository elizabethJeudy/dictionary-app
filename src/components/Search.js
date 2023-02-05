import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import SearchResults from "./SearchResults";

// api documentation link: https://dictionaryapi.dev/

export default function Search() {
	// this state retrieves the word user searched
	let [keyword, setKeyword] = useState("");

	// this state updates whenever user searches
	let [results, setResults] = useState(null);

	// grabs the searched word from api
	function handleResponse(response) {
		console.log(response.data[0]);
		console.log(response.data[0].meanings);
		setResults(response.data[0]);
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

	// renders whenever user searches for a word
	// {results} receives results from API
	return (
		<div className="container searchContainer">
			<h1>Dictionary</h1>
			<form onSubmit={search}>
				<input
					type="search"
					onChange={handleKeywordChange}
					placeholder="What word would you like to search?"
					className="search-input"
				/>
			</form>
			<SearchResults results={results} />
		</div>
	);
}
