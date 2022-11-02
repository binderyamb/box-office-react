import React from "react";
import ShowCard from "./ShowCard";
import Not_Found from "../../images/not-found.jpg";
import { FlexGrid } from "../styled";
import { useShows } from "../../misc/cutomHooks";

function ShowGrid({ data }) {
	const [starredShows, dispatchStarred] = useShows();
	return (
		<FlexGrid>
			{data.map(({ show }) => {
				const isStarred = starredShows.includes(show.id);

				const onStarClick = () => {
					if (isStarred) {
						dispatchStarred({ type: "REMOVE", showId: show.id });
					} else {
						dispatchStarred({ type: "ADD", showId: show.id });
					}
				};
				return (
					<ShowCard
						key={show.id}
						name={show.name}
						id={show.id}
						image={show.image ? show.image.medium : Not_Found}
						description={show.summary}
						onStarClick={onStarClick}
						isStarred={isStarred}
					/>
				);
			})}
		</FlexGrid>
	);
}

export default ShowGrid;
