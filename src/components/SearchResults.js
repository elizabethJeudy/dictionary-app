import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function SearchResults(props) {
	if (props.results) {
		return (
			<div className="SearchResults">
				<h2> {props.results.word.toUpperCase()} </h2>
				{props.results.phonetics.map(function (phonetics, index) {
					return (
						<div key={index}>
							<Phonetics phonetics={phonetics} />
						</div>
					);
				})}

				{props.results.meanings.map(function (meaning, index) {
					return (
						<section key={index}>
							<Meaning meaning={meaning} />
						</section>
					);
				})}
			</div>
		);
	} else return null;
}
