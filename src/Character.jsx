export default function Character({
	imageUrl,
	name,
	films,
	shortFilms,
	tvShows,
	videoGames,
	parkAttractions,
	allies,
	enemies,
}) {
	const appearances = {
		films,
		shortFilms,
		tvShows,
		videoGames,
		parkAttractions,
	};

	const people = {
		allies,
		enemies,
		// count: () => {
		// 	return allies.length + enemies.length;
		// },
	};

	console.log(JSON.stringify(people), 2);

	return (
		<>
			<div className="border-md rounded-lg shadow-sm bg-gray-200 shadow-gray-300 py-2 px-3">
				<p className="text-2xl font-semibold p-2">{name}</p>
				<section className="">
					<div className=" ">
						<img
							src={imageUrl}
							className={{ shapeOutside: 'circle("50%")' }}
						/>
					</div>
					<section className="ml-2">
						<div className="">
							{Object.keys(appearances).map(
								(appearanceType, index) => {
									return (
										<>
											<div className="">
												{appearances[appearanceType]
													.length > 0 ? (
													<>
														<div className="text-md font-medium capitalize">
															{appearanceType}:{" "}
														</div>
														<div className="flex flex-wrap gap-1">
															{appearances[
																appearanceType
															]
																.slice(0, 3)
																.map(
																	(
																		appearance,
																		index
																	) => {
																		return (
																			<>
																				<span className="rounded-full bg-gray-300 text-xs px-2 py-1 ">
																					{
																						appearance
																					}
																				</span>
																			</>
																		);
																	}
																)}
														</div>
													</>
												) : null}
											</div>
										</>
									);
								}
							)}
						</div>
						<div className="">
							{Object.keys(people).map((personType, index) => {
								return (
									<>
										<div className="" key={index}>
											{people[personType].length > 0 ? (
												<>
													<div className="text-md font-medium capitalize">
														{personType}:{" "}
													</div>
													<div className="flex flex-wrap gap-1">
														{people[personType]
															.slice(0, 3)
															.map(
																(
																	person,
																	index
																) => {
																	return (
																		<>
																			<span
																				className="rounded-full bg-gray-300 text-xs px-2 py-1"
																				key={
																					index
																				}
																			>
																				{
																					person
																				}
																			</span>
																		</>
																	);
																}
															)}
													</div>
												</>
											) : null}
										</div>
									</>
								);
							})}
						</div>
					</section>
				</section>
			</div>
		</>
	);
}
