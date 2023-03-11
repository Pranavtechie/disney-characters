import React from "react";
import { fetcher } from "./utils";
import useSWR from "swr";
import Character from "./Character";

function App() {
	const [pageNumber, setPageNumber] = React.useState(1);
	const { data, error, isLoading } = useSWR(
		`https://api.disneyapi.dev/characters?page=${pageNumber}`,
		fetcher
	);

	function updatePageNumber(direction) {
		if (direction === "increment") {
			setPageNumber((page) => page + 1);
		} else if ((direction === "decrement") & (pageNumber !== 1)) {
			setPageNumber((page) => page - 1);
		}
	}

	return (
		<>
			<nav className="sticky mb-3 w-full bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100 py-2 px-1">
				<div className="flex justify-between items-center px-3">
					<button
						class="px-5 py-2.5 font-medium bg-blue-100 hover:bg-blue-200 hover:text-blue-700 text-blue-500 rounded-lg text-sm disabled:bg-gray-300 disabled:cursor-not-allowed"
						disabled={pageNumber === 1}
						onClick={() => updatePageNumber("decrement")}
					>
						Previous Page
						{pageNumber !== 1 ? `(${pageNumber - 1})` : null}
					</button>
					<div className="flex gap-3 items-center p-0 justify-center">
						<img src="/disney-logo.svg" className="w-32 -my-8" />
						<h1 className="text-2xl text-[#3f97f6] font-bold hidden md:block">
							Characters
						</h1>
					</div>
					<button
						class="px-5 py-2.5 font-medium bg-blue-100 hover:bg-blue-200 hover:text-blue-700 text-blue-500 rounded-lg text-sm"
						onClick={() => updatePageNumber("increment")}
					>
						Next Page ({pageNumber + 1})
					</button>
				</div>
			</nav>

			<section>
				{isLoading ? (
					<div className="h-screen bg-white">
						<div className="flex justify-center items-center h-full">
							<img
								className="h-16 w-16"
								src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
								alt=""
							/>
						</div>
					</div>
				) : (
					<main className="">
						<section className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3 2xl:grid-cols-4">
							{data?.data.map((characterData, index) => {
								return (
									<Character {...characterData} key={index} />
								);
							})}
						</section>
					</main>
				)}
			</section>

			{/* <div className="bg-red-800 w-full h-200">content</div> */}
		</>
	);
}

export default App;
