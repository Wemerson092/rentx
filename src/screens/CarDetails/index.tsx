import React from "react";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Acessory } from "../../components/Acessory";
import { Button } from "../../components/Button";

import speedSvg from "../../assets/speed.svg";
import accelerationSvg from "../../assets/acceleration.svg";
import forceSvg from "../../assets/force.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import exchangeSvg from "../../assets/exchange.svg";
import peopleSvg from "../../assets/people.svg";

import {
	Container,
	Header,
	CarImages,
	Content,
	Details,
	Description,
	Brand,
	Name,
	Rent,
	Period,
	Price,
	About,
	Acessories,
	Footer,
} from "./styles";


export function CarDetails() {
	return (
		<Container>
			<Header>
				<BackButton onPress={() => { }} />
			</Header>

			<CarImages>
				<ImageSlider imagesUrl={["https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/a92a5dd1-2fc0-4f9c-a4e6-a0ae4c4cd938/565c4265-ce2f-4ba0-8043-365b097daabf.png"]} />
			</CarImages>

			<Content>
				<Details>
					<Description>
						<Brand>Lamborghini</Brand>
						<Name>Huracan</Name>
					</Description>

					<Rent>
						<Period>Ao dia</Period>
						<Price>R$ 580</Price>
					</Rent>
				</Details>

				<Acessories>
					<Acessory name="380Km/h" icon={speedSvg} />
					<Acessory name="3.2s" icon={accelerationSvg} />
					<Acessory name="800 HP" icon={forceSvg} />
					<Acessory name="Gasolina" icon={gasolineSvg} />
					<Acessory name="Auto" icon={exchangeSvg} />
					<Acessory name="2 pessoas" icon={peopleSvg} />
				</Acessories>

				<About>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					non risus. Suspendisse lectus tortor, dignissim sit amet.				
				</About>
			</Content>

			<Footer>
				<Button title="Escolher período do aluguel"/>
			</Footer>

		</Container>
	);
}