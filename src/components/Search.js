import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";

// api documentation link: https://dictionaryapi.dev/

export default function Search(props) {
	// this state retrieves the word user searched
	let [keyword, setKeyword] = useState(props.defaultKeyword);
	// this state updates whenever user searches
	let [results, setResults] = useState(null);
	// checks if user has searched a word
	let [loaded, setLoaded] = useState(false);
	// grabs the searched word from api
	function handleResponse(response) {
		setResults(response.data[0]);
	}

	// displays when searching for keyword
	function search() {
		// creates API key when user searches for a word
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
	}

	// calls API url to retrieve results
	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	// pulls the keyword typed in search
	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	function load() {
		setLoaded(true);
		search();
	}

	// renders is loaded (user searches word)
	// {results} receives results from API
	if (loaded) {
		return (
			<div className="Search">
				<h1>Dictionary</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="search"
						onChange={handleKeywordChange}
						placeholder="What word would you like to search?"
						className="search-input"
					/>
				</form>
				<div className="hint">
					Suggested words: books, wine, yoga, sunshine....
				</div>
				<SearchResults results={results} />
			</div>
		);
	} else {
		load();
		return "Loading";
	}
}
