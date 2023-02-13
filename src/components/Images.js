import React from "react";
import "./Images.css";

export default function Images(props) {
	if (props.images) {
		console.log(props.images);
		return (
			<div className="Images">
				<div className="row">
					{props.images.map(function (photo, index) {
						return (
							<div className="col-2" key={index}>
								<a href="{photo.src.original}" target="_blank">
									<img
										src={photo.src.landscape}
										alt="searched word"
										className="img-fluid"
									/>
								</a>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
