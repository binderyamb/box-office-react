import React from "react";
import { Link } from "react-router-dom";
import { Star } from "../styled";
import { ShowCardStyled } from "./style/ShowCard.styled";

function ShowCard({ id, name, image, description, onStarClick, isStarred }) {
	const DescriptionText = description
		? `${description
				.split(" ")
				.slice(0, 10)
				.join(" ")
				.replace(/<.+?>/g, "")}`
		: "Contrary to popular belief, Lorem Ipsum is not simply random text.";
	return (
		<ShowCardStyled>
			<div className="img-wrapper">
				<img src={image} alt="show" />
			</div>

			<h1>{name}</h1>

			<p>{DescriptionText}</p>

			<div className="btns">
				<Link to={`/show/${id}`}>Илүү ихийг...</Link>
				<button type="button" onClick={onStarClick}>
					<Star isActive={isStarred} />
				</button>
			</div>
		</ShowCardStyled>
	);
}

export default ShowCard;
