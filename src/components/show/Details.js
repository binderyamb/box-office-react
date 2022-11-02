import React from "react";
import { DetailsWrapper } from "./style/Details.styled";

function Details({ network, premiered, status }) {
	return (
		<DetailsWrapper>
			<p>
				Status : <span>{status}</span>
			</p>
			<p>
				Premiered {premiered} {network ? `on ${network.name}` : null}
			</p>
		</DetailsWrapper>
	);
}

export default Details;
