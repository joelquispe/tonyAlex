"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { motion } from "framer-motion";
interface INavLink {
	name: string;
	path: string;
}

const CompNavbar = () => {
	const domain = "https://joelquispe.github.io/tonyAlex/";
	const devDomain = "http://localhost:3000/";
	const pathname =
		usePathname();
	const navLinks: INavLink[] =
		[
			{
				name: "Inicio",
				path: "/",
			},
			{
				name: "Canciones",
				path: "/canciones",
			},
			{
				name: "Eventos",
				path: "/eventos",
			},
			{
				name: "Información",
				path: "/informacion",
			},
		];
	return (
		<motion.div
				initial={{
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 0.8,
					delay: 0.3,
					ease: [
						0, 0.71, 0.2,
						1.01,
					],
				}}
			>
		<nav className="bg-white shadow dark:bg-black border-b mb-16">
			<div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
				{navLinks.map(
					(link) => {
						const isActive =
							pathname.endsWith(
								link.path
							);
						return (
							<Link
								key={
									link.name
								}
								href={
									link.path
								}
								as={domain}
								className={classNames(
									"border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6",
									{
										"text-white |important":
											isActive,
										"text-gray-400":
											!isActive,
									}
								)}
							>
								{link.name}
							</Link>
						);
					}
				)}
			</div>
		</nav>
		</motion.div>
	);
};
export default CompNavbar;

// border-b-2 border-blue-500
