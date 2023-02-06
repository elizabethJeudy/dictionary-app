import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
	return (
		<div className="Meaning">
			<h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
			{props.meaning.definitions.map(function (definition, index) {
				return (
					<div key={index}>
						<p>
							{definition.definition}
							<br />

							<em className="example">{definition.example}</em>
							<Synonyms synonyms={definition.synonyms} />
						</p>
					</div>
				);
			})}
		</div>
	);
}
