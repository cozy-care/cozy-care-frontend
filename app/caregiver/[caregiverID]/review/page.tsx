'use client'

import { ArrowBackIosNew, StarRounded } from "@mui/icons-material";
import { Button, Progress } from "@nextui-org/react";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import ReviewCard from "./reviewCard";

export default function Review() {
  const router = useRouter();
  const { caregiverID: userID } = useParams() as { caregiverID: string };

  const star1Total = 0;
  const star2Total = 5;
  const star3Total = 10;
  const star4Total = 38;
  const star5Total = 562;
  const total = star1Total+ star2Total + star3Total + star4Total + star5Total;
  const rawAverage = (((star5Total * 5) + (star4Total * 4) + (star3Total * 3) + (star2Total * 2) + (star1Total * 1)) / total);

  // เช็คว่ามีทศนิยมมั้ย ถ้ามี ให้เก็บทศนิยมไว้จุดเดียว
  const averageStar: string = Number.isInteger(rawAverage) 
  ? rawAverage.toString() 
  : rawAverage.toFixed(1);

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
          <p className="font-bold text-3xl">{averageStar}</p>
          <p className="font-medium">{total} เรทติ้ง</p>
        </div>

        <div className="flex flex-col w-[72%]">
          <div className="flex items-center text-yellow-500">
            <StarRounded /><StarRounded /><StarRounded /><StarRounded /><StarRounded />
            <Progress aria-label="Loading..." size="sm" value={star5Total / total * 100} className="w-[100px]" /> {/* Changed value to percentage */}
            <p className="text-black font-medium ml-2">{star5Total}</p>
          </div>
          <div className="flex items-center text-yellow-500">
            <StarRounded /><StarRounded /><StarRounded /><StarRounded /><StarRounded className="text-[#EEEEEE]" />
            <Progress aria-label="Loading..." size="sm" value={star4Total / total * 100} className="w-[100px]" /> {/* Changed value to percentage */}
            <p className="text-black font-medium ml-2">{star4Total}</p>
          </div>
          <div className="flex items-center text-yellow-500">
            <StarRounded /><StarRounded /><StarRounded /><StarRounded className="text-[#EEEEEE]" /><StarRounded className="text-[#EEEEEE]" />
            <Progress aria-label="Loading..." size="sm" value={star3Total / total * 100} className="w-[100px]" /> {/* Changed value to percentage */}
            <p className="text-black font-medium ml-2">{star3Total}</p>
          </div>
          <div className="flex items-center text-yellow-500">
            <StarRounded /><StarRounded /><StarRounded className="text-[#EEEEEE]" /><StarRounded className="text-[#EEEEEE]" /><StarRounded className="text-[#EEEEEE]" />
            <Progress aria-label="Loading..." size="sm" value={star2Total / total * 100} className="w-[100px]" /> {/* Changed value to percentage */}
            <p className="text-black font-medium ml-2">{star2Total}</p>
          </div>
          <div className="flex items-center text-yellow-500">
            <StarRounded /><StarRounded className="text-[#EEEEEE]" /><StarRounded className="text-[#EEEEEE]" /><StarRounded className="text-[#EEEEEE]" /><StarRounded className="text-[#EEEEEE]" />
            <Progress aria-label="Loading..." size="sm" value={star1Total / total * 100} className="w-[100px]" /> {/* Changed value to 0 */}
            <p className="text-black font-medium ml-2">{star1Total}</p>
          </div>
        </div>
      </div>

      <div className="overflow-y-scroll w-full">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </main>
  )
}