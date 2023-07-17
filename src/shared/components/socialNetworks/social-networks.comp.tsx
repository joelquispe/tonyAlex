import Image from "next/image";
const CompSocialNetworks =
	() => {
		const socialNetowkrs = [
			"facebook.png",
			"instagram.png",
			"twitter.png",
      "youtube.png"
		];
		return (
			<div className="h-auto grid rounded-xl w-auto p-2 gap-2 fixed right-2 top-72 ">
				{socialNetowkrs.map(
					(socialNetwork) => {
						return (
							<Image
              alt=""
              className="cursor-pointer"
								width={35}
								height={35}
								key={
									socialNetwork
								}
								src={'./social/'+socialNetwork}
							/>
						);
					}
				)}
			</div>
		);
	};

export default CompSocialNetworks;
