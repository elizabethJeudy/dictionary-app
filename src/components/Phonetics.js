import React from "react";
import "./Phonetics.css";
import { HiPlay } from "react-icons/hi";

export default function Phonetics(props) {
	function playAudio() {
		let audio = new Audio(props.phonetics.audio);
		audio.play();
	}

	return (
		<div className="Phonetics">
			<span className="phoneticsText">{props.phonetics.text}</span>
			<span className="phoneticsAudio">
				<HiPlay onClick={playAudio} />
			</span>
		</div>
	);
}
