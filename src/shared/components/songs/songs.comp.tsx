import CompScaleAnimation from "../animations/scale-motion.comp";
import CompCardMusic from "../comp-card-music/card-music.comp";
import { motion } from "framer-motion";

interface ISong {
	id:number;
	image: string;
	music: string;
}
const CompSongs = () => {
	const songs: ISong[] = [
		{
			id:1,
			image: "yandio.JPG",
			music:
				"Tony Alex-No puedo.mp3",
		},
		{
			id:2,
			image: "yandio.JPG",
			music:
				"Tony Alex-No puedo.mp3",
		},
		{
			id:3,
			image: "yandio.JPG",
			music:
				"Tony Alex-No puedo.mp3",
		},
		{
			id:4,
			image: "yandio.JPG",
			music:
				"Tony Alex-No puedo.mp3",
		},
		{
			id:5,
			image: "yandio.JPG",
			music:
				"Tony Alex-No puedo.mp3",
		},
		{
			id:6,
			image: "yandio.JPG",
			music:
				"Tony Alex-No puedo.mp3",
		},
		{
			id:7,
			image: "yandio.JPG",
			music:
				"Tony Alex-No puedo.mp3",
		},
		{
			id:8,
			image: "yandio.JPG",
			music:
				"Tony Alex-No puedo.mp3",
		},
	];
	return (
		<div className="flex flex-wrap justify-around gap-28 w-10/12 mx-auto  mb-32">
			{songs.map((song) => {
				return (
					<CompScaleAnimation key={song.id}>
						<CompCardMusic
							src={song.music}
							image={
								song.image
							}
						/>
					</CompScaleAnimation>
				);
			})}
		</div>
	);
};

export default CompSongs;
