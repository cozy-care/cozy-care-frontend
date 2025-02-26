'use client'

import { ArrowBackIosNew, StarRounded } from "@mui/icons-material";
import { Button, Progress } from "@nextui-org/react";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function Review() {
	const router = useRouter();
	const { caregiverID: userID } = useParams() as { caregiverID: string };

	useEffect(() => {
		document.title = "Review - Cozy Care";
	}, []);

	return (
		<main className="flex flex-col items-center h-[100dvh]">
			{/* Top Bar */}
			<div className="flex relative items-center gap-3 w-full h-[50px]">
				<h1 className="absolute  w-full flex text-lg font-bold justify-center items-center ">
					รายละเอียดรีวิว
				</h1>
				<Button
					onPress={() => router.back()}
					className="text-cozy-green-light"
					isIconOnly
					radius="full"
					variant="light"
				>
					<ArrowBackIosNew />
				</Button>
			</div>

			<div className="flex w-full h-max py-3 border-b-2 border-gray-200">
				<div className="flex flex-col items-center justify-center w-[28%]">
					<p className="font-bold text-3xl">4.9</p>
					<p className="font-medium">615 เรทติ้ง</p>
				</div>

				<div className="flex flex-col w-[72%]">
					<div className="flex items-center text-yellow-500">
						<StarRounded /><StarRounded /><StarRounded /><StarRounded /><StarRounded />
						<Progress size="sm" value={562 / 615 * 100} className="w-[100px]" /> {/* Changed value to percentage */}
						<p className="text-black font-medium ml-2">562</p>
					</div>
					<div className="flex items-center text-yellow-500">
						<StarRounded /><StarRounded /><StarRounded /><StarRounded /><StarRounded className="text-[#EEEEEE]" />
						<Progress size="sm" value={38 / 615 * 100} className="w-[100px]" /> {/* Changed value to percentage */}
						<p className="text-black font-medium ml-2">38</p>
					</div>
					<div className="flex items-center text-yellow-500">
						<StarRounded /><StarRounded /><StarRounded /><StarRounded className="text-[#EEEEEE]" /><StarRounded className="text-[#EEEEEE]" />
						<Progress size="sm" value={10 / 615 * 100} className="w-[100px]" /> {/* Changed value to percentage */}
						<p className="text-black font-medium ml-2">10</p>
					</div>
					<div className="flex items-center text-yellow-500">
						<StarRounded /><StarRounded /><StarRounded className="text-[#EEEEEE]" /><StarRounded className="text-[#EEEEEE]" /><StarRounded className="text-[#EEEEEE]" />
						<Progress size="sm" value={5 / 615 * 100} className="w-[100px]" /> {/* Changed value to percentage */}
						<p className="text-black font-medium ml-2">5</p>
					</div>
					<div className="flex items-center text-yellow-500">
						<StarRounded /><StarRounded className="text-[#EEEEEE]" /><StarRounded className="text-[#EEEEEE]" /><StarRounded className="text-[#EEEEEE]" /><StarRounded className="text-[#EEEEEE]" />
						<Progress size="sm" value={0} className="w-[100px]" /> {/* Changed value to 0 */}
						<p className="text-black font-medium ml-2">0</p>
					</div>
				</div>
			</div>

			<div className="overflow-scroll w-full">
				<div className="w-full h-max py-20 border-b-2 border-gray-200">
					test
				</div>
			</div>
		</main>
	)
}