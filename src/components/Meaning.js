import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
	return (
		<div className="Meaning">
			<h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
			{props.meaning.definitions.map(function (definition, index) {
				if (index < 3) {
					return (
						<div key={index}>
							<p className="definition">
								<strong className="number">{index + 1}.</strong>{" "}
								{definition.definition}
								<br />
								<em className="example">{definition.example}</em>
								<Synonyms synonyms={definition.synonyms} />
							</p>
						</div>
					);
				} else {
					return null;
				}
			})}
		</div>
	);
}
