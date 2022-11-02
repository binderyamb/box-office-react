import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";

function MainPageLayout({ children }) {
	return (
		<div>
			<Title
				title="Бокс оффис"
				subtitle="Та өөрийн хүссэн кино болон жүжигчидээ хайгаарай"
			/>
			<Navbar />
			{children}
		</div>
	);
}

export default MainPageLayout;
