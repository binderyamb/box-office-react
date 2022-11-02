import React from "react";
import Not_Found from "../../images/not-found.jpg";
import { Star } from "../styled";
import {
	Headline,
	MainDataWrapper,
	TagList,
} from "./style/ShowMainData.styled";

function ShowMainData({ name, image, rating, tags, summary }) {
	return (
		<MainDataWrapper>
			<img src={image ? image.original : Not_Found} alt="show-cover" />
			<div className="text-side">
				<Headline>
					<h1>{name}</h1>
					<div>
						<Star isActive />
						<span>{rating.average || "N/A"}</span>
					</div>
				</Headline>
				<div
					className="summary"
					dangerouslySetInnerHTML={{ __html: summary }}
				/>
				<div>
					Tags:{" "}
					<TagList>
						{tags.map((tag, index) => {
							return <span key={index}>{tag}</span>;
						})}
					</TagList>
				</div>
			</div>
		</MainDataWrapper>
	);
}

export default ShowMainData;
