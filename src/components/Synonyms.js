import React from "react";

export default function Synonyms(props) {
	if (props.synonyms) {
		return (
			<div className="synonyms">
				{props.synonyms.map(function (synonyms, index) {
					return (
						<span className="syn" key={index}>
							{synonyms}
						</span>
					);
				})}
			</div>
		);
	}
}
