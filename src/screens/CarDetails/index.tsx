import React from "react";
import { BackButton } from "../../components/BackButton";

import {
	Container,
	Header,
	CarImages,
} from "./styles";
import { ImageSlider } from "../../components/ImageSlider";

export function CarDetails() {
	return (
		<Container>
			<Header>
				<BackButton onPress={() => { }} />
			</Header>

			<CarImages>
				<ImageSlider imagesUrl={["https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/a92a5dd1-2fc0-4f9c-a4e6-a0ae4c4cd938/565c4265-ce2f-4ba0-8043-365b097daabf.png"]} />
			</CarImages>

		</Container>
	);
}