'use client'

import { ArrowBackIosNew, StarRounded } from "@mui/icons-material";
import { Button, Progress } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import ReviewCard from "./reviewCard";
import { format, parse } from "date-fns";
import { th } from "date-fns/locale";

interface ReviewType {
  review_id: string;
  client_id: string;
  rating: number;
  comment: string;
  review_time: string; // "25-03-2025 17:19:44"
  alias: string;
}

export default function Review() {
  const router = useRouter();
  const { caregiverID } = useParams();
  const userID: string = typeof caregiverID === "string" ? caregiverID : "";

  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [ratingCounts, setRatingCounts] = useState<{
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  }>({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });
  const [averageStar, setAverageStar] = useState("0");

  useEffect(() => {
    document.title = "Review - Cozy Care";

    async function fetchReviews() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/review/get-review-by-user/${userID}`
        );
        const data: ReviewType[] = await res.json();

        setReviews(data);

        const ratingMap: { 1: number; 2: number; 3: number; 4: number; 5: number } = {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
        };
        let sum = 0;

        data.forEach((review) => {
          const roundedRating = Math.round(review.rating) as 1 | 2 | 3 | 4 | 5;
          ratingMap[roundedRating]++;
          sum += review.rating;
        });

        setRatingCounts(ratingMap);

        const total = data.length;
        const average = total > 0 ? sum / total : 0;
        setAverageStar(Number.isInteger(average) ? average.toString() : average.toFixed(1));
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      }
    }

    if (userID) {
      fetchReviews();
    }
  }, [userID]);

  const total = Object.values(ratingCounts).reduce((acc, val) => acc + val, 0);
  const stars: (1 | 2 | 3 | 4 | 5)[] = [5, 4, 3, 2, 1];

  return (
    <main className="flex flex-col items-center h-[100dvh]">
      {/* Top Bar */}
      <div className="flex relative items-center gap-3 w-full h-[50px]">
        <h1 className="absolute w-full flex text-lg font-bold justify-center items-center">
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

      {/* Rating Summary */}
      <div className="flex w-full h-max py-3 border-b-2 border-gray-200">
        <div className="flex flex-col items-center justify-center w-[28%]">
          <p className="font-bold text-3xl">{averageStar}</p>
          <p className="font-medium">{total} เรทติ้ง</p>
        </div>

        <div className="flex flex-col w-[72%]">
          {stars.map((star) => (
            <div key={star} className="flex items-center text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <StarRounded key={i} className={i < star ? "" : "text-[#EEEEEE]"} />
              ))}
              <Progress
                aria-label={`Star ${star} rating`}
                size="sm"
                value={(ratingCounts[star] / total) * 100 || 0}
                className="w-[100px]"
              />
              <p className="text-black font-medium ml-2">{ratingCounts[star]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Review Cards */}
      <div className="overflow-y-scroll w-full flex flex-col items-center py-4">
        {reviews.length === 0 ? (
          <p className="text-gray-500 text-center">ยังไม่มีรีวิว</p>
        ) : (
          reviews.map((review) => {
            let displayDate = "ไม่ทราบวันที่";
            const parsedDate = parse(review.review_time, "dd-MM-yyyy HH:mm:ss", new Date());

            if (!isNaN(parsedDate.getTime())) {
              displayDate = format(parsedDate, "dd MMM yyyy", { locale: th });
            }

            return (
              <ReviewCard
                key={review.review_id}
                username={`${review.alias}`}
                date={displayDate}
                star={Math.round(review.rating)}
                comment={review.comment}
              />
            );
          })
        )}
      </div>
    </main>
  );
}
