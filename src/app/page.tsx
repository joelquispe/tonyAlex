"use client";
import CompScaleAnimation from "@/shared/components/animations/scale-motion.comp";
import CompCardMusic from "@/shared/components/comp-card-music/card-music.comp";
import CompSocialNetworks from "@/shared/components/socialNetworks/social-networks.comp";
import CompSongs from "@/shared/components/songs/songs.comp";
import { motion } from "framer-motion";
import Image from "next/image";
import "react-h5-audio-player/lib/styles.css";
interface ISong {
	image: string;
	music: string;
}
export default function Home() {
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
		<main className=" text-center">
			
			<CompSocialNetworks/>
			<CompScaleAnimation 
			>
				<div className="w-100 grid justify-center pb-32 mb-32 border-b-2">
					<h1 className="text-5xl mb-10 ">
						Tony Alex
					</h1>
					<Image
						alt="image"
						src="/images/male.png"
						width={700}
						height={700}
					/>
				</div>
				<CompSongs/>
			</CompScaleAnimation>

			

			{/* <motion.div initial={{ opacity: 0,scale: 0.5, }}
			transition={{delay:0.5}}
			viewport={{ once: true }}
  whileInView={{ opacity: 1 ,scale: 1,}}>
<div className="h-96 bg-slate-300">

</div>
	</motion.div> */}
		</main>
	);
}
