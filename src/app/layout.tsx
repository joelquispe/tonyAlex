import CompNavbar from "@/shared/components/navbar/navbar.comp";
import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import CompFooter from "@/shared/components/footer/footer.comp";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata =
	{
		title: "Create Next App",
		description:
			"Generated by create next app",
	};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={
					inter.className
				}
			>
				<Image
					className="fixed  brightness-50 h-full -z-10"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
					src={
						"./images/singer-background.jpg"
					}
					alt=""
				/>
				<CompNavbar></CompNavbar>
				{children}
				
				<CompFooter></CompFooter>
			</body>
		</html>
	);
}
