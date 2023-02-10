import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import Images from "./Images";
// api documentation link: https://dictionaryapi.dev/

export default function Search(props) {
	// this state retrieves the word user searched and displays default word
	let [keyword, setKeyword] = useState(props.defaultKeyword);
	// this state updates whenever user searches
	let [results, setResults] = useState(null);
	// checks if user has searched a word
	let [loaded, setLoaded] = useState(false);
	// keeps track of photos
	let [images, setImages] = useState(null);

	// grabs the searched word from api
	function handleDictionaryResponse(response) {
		setResults(response.data[0]);
	}

	function handlePexelsResponse(response) {
		console.log(response.data);
		setImages(response.data.photos);
	}

	// displays when searching for keyword
	function search() {
		// creates API key when user searches for a word (dictionary api)
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleDictionaryResponse);
		// images api
		let pexelsApiKey =
			"Qxfq5tSwsRmhhqGVN5pDBVG9CtF4B9Glf2CiW9eMlCHVZpT5VqHNQ9uI";
		let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;
		// authorization for apikey, solution documentation here
		let headers = { Authorization: `Bearer ${pexelsApiKey}` };
		axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
				<Images images={images} />
				<SearchResults results={results} />
			</div>
		);
	} else {
		load();
		return "Loading";
	}
}
