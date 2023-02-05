import React from "react";
import Meaning from "./Meaning";
import "./SearchResults.css";
import { RxSpeakerLoud } from "react-icons/rx";

export default function SearchResults(props) {
	if (props.results) {
		return (
			<div className="SearchResults">
				<RxSpeakerLoud />
				<h2> {props.results.word.toUpperCase()} </h2>
				{props.results.meanings.map(function (meaning, index) {
					return (
						<div key={index}>
							<Meaning meaning={meaning} />
						</div>
					);
				})}
			</div>
		);
	} else return null;
}
