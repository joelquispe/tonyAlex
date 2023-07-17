"use client";
import CompScaleAnimation from "@/shared/components/animations/scale-motion.comp";
import CompCardMusic from "@/shared/components/comp-card-music/card-music.comp";
import CompSocialNetworks from "@/shared/components/socialNetworks/social-networks.comp";
import CompSongs from "@/shared/components/songs/songs.comp";
import Image from "next/image";
import "react-h5-audio-player/lib/styles.css";
export default function Home() {
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
						src="./images/singer.jpg"
						width={700}
						height={700}
					/>
				</div>
				<CompSongs/>
			</CompScaleAnimation>
		</main>
	);
}
