import React from "react";
import { RxSpeakerLoud } from "react-icons/rx";

export default function Phonetics(props) {
	return (
		<div className="Phonetics">
			{props.phonetics.text}
			<a href={props.phonetics.audio} target="_blank" rel="noreferrer">
				<RxSpeakerLoud />
			</a>
		</div>
	);
}
