import React from "react";
import ActorCard from "./ActorCard";
import Not_Found from "../../images/not-found.jpg";
import { FlexGrid } from "../styled";

function ActorGrid({ data }) {
	return (
		<FlexGrid>
			{data.map(({ person }) => {
				return (
					<ActorCard
						key={person.id}
						name={person.name}
						birthday={person.birthday}
						deathday={person.deathday}
						gender={person.gender}
						image={person.image ? person.image.medium : Not_Found}
						country={person.country ? person.country.name : null}
					/>
				);
			})}
		</FlexGrid>
	);
}

export default ActorGrid;
