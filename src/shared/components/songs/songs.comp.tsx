import CompScaleAnimation from "../animations/scale-motion.comp";
import CompCardMusic from "../comp-card-music/card-music.comp";
import { motion } from "framer-motion";

interface ISong {
	image: string;
	music: string;
}
const CompSongs = () => {
	const songs: ISong[] = [
		{
			image: "yandio.JPG",
			music:
				"Tony Alex-No puedo.mp3",
		},
		{
			image: "yandio.JPG",
			music:
				"Tony Alex-No puedo.mp3",
		},
		{
			image: "yandio.JPG",
			music:
				"Tony Alex-No puedo.mp3",
		},
		{
			image: "yandio.JPG",
			music:
				"Tony Alex-No puedo.mp3",
		},
		{
			image: "yandio.JPG",
			music:
				"Tony Alex-No puedo.mp3",
		},
		{
			image: "yandio.JPG",
			music:
				"Tony Alex-No puedo.mp3",
		},
		{
			image: "yandio.JPG",
			music:
				"Tony Alex-No puedo.mp3",
		},
		{
			image: "yandio.JPG",
			music:
				"Tony Alex-No puedo.mp3",
		},
	];
	return (
		<div className="flex flex-wrap justify-around gap-28 w-10/12 mx-auto  mb-32">
			{songs.map((song) => {
				return (
					<CompScaleAnimation key={song.image}>
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
