import React from "react";
import "./Phonetics.css";
import { HiPlay } from "react-icons/hi";

export default function Phonetics(props) {
	let audio = new Audio(" ");
	function playAudio(props) {
		let audio = new Audio();
		audio.play();
	}
	return (
		<div className="Phonetics">
			<span className="phoneticsText">{props.phonetics.text}</span>
			<span className="phoneticsAudio">
				<a href={props.phonetics.audio} target="_blank" rel="noreferrer">
					<HiPlay />
				</a>
			</span>
		</div>
	);
}
