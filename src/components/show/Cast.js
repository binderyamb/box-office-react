import React from "react";
import Not_Found from "../../images/not-found.jpg";
import { CastList } from "./style/Cast.styled";

function Cast({ cast }) {
	return (
		<CastList>
			{cast.map(({ person, character, voice }, key) => {
				return (
					<div key={key} className="cast-item">
						<div className="pic-wrapper">
							<img
								src={
									person.image
										? person.image.medium
										: Not_Found
								}
								alt="cast-person"
							/>
						</div>
						<div className="actor">
							<span>
								<span className="bold">{person.name}</span> |{" "}
								{character.name} {voice ? "| Voice" : ""}
							</span>
						</div>
					</div>
				);
			})}
		</CastList>
	);
}

export default Cast;
