import React from "react";

export default function Images(props) {
	if (props.images) {
		console.log(props.images);
		return (
			<div className="Images">
				<div className="row">
					{props.images.map(function (photo, index) {
						return (
							<div className="col-4" key={index}>
								<a href="{photo.src.original}">
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
