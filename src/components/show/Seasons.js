import React from "react";
import { SeasonList, SeasonsWrapper } from "./style/Season.styled";

function Seasons({ seasons }) {
	return (
		<SeasonsWrapper>
			<p>
				Нийт : <span>{seasons.length}</span> бүлэгтэй
			</p>
			<p>
				Нийт ангиуд :{" "}
				<span>
					{seasons.reduce(
						(acc, season) => acc + season.episodeOrder,
						0
					)}
				</span>
			</p>
			<SeasonList>
				{seasons.map((season) => {
					return (
						<div key={season.id} className="season-item">
							<div className="left">
								<p>Бүлэг : {season.number}</p>
								<p>
									Ангиуд: {""}
									<span>{season.episodeOrder}</span>
								</p>
							</div>
							<div className="right">
								Цацагдсан он : {""}
								<span>
									{season.premiereDate} - {season.endDate}
								</span>
							</div>
						</div>
					);
				})}
			</SeasonList>
		</SeasonsWrapper>
	);
}

export default Seasons;
