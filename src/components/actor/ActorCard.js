import React from "react";
import { ActorCardStyled } from "./ActorCard.styled";

function ActorCard({ name, gender, image, country, birthday, deathday }) {
	return (
		<ActorCardStyled>
			<div className="img-wrapper">
				<img src={image} alt="actor" />
			</div>
			<h1>
				{name} (
				{gender
					? `${gender === "Male" ? "Эрэгтэй" : "Эмэгтэй"}`
					: "хүйс тодорхойгүй"}
				)
			</h1>
			<p>{country ? `${country}` : "Улс тодорхойгүй"}</p>
			{birthday ? <p>Born : {birthday}</p> : null}
			<p className="deathday">
				{deathday ? `Death: ${deathday}` : `Alive`}
			</p>
		</ActorCardStyled>
	);
}

export default ActorCard;
