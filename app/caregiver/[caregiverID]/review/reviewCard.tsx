import { StarRounded } from "@mui/icons-material";

interface Props {
  username?: string;
  date?: string;
  star?: number;
  comment?: string;
}

export default function ReviewCard({
  username = "defaultUsername",
  date = "10 ม.ค. 68",
  star = 3,
  comment = "Default Service comment",
}: Props) {

  return (
    <div className="flex flex-col gap-2 w-full h-max px-4 py-4 border-b-2 border-gray-200">
      <div className="flex justify-between">
        <p className="text-lg font-bold">{username}</p>
        <p className="text-[#6B6B6B]">{date}</p>
      </div>

      <div className="flex -ml-1 text-yellow-500">
        <StarRounded />
        <StarRounded className={`${star <= 1 && "text-[#EEEEEE]"}`}/>
        <StarRounded className={`${star <= 2 && "text-[#EEEEEE]"}`}/>
        <StarRounded className={`${star <= 3 && "text-[#EEEEEE]"}`}/>
        <StarRounded className={`${star <= 4 && "text-[#EEEEEE]"}`}/>
      </div>

      <div className="flex w-full h-max text-wrap">
        {comment}
      </div>
    </div>
  );
}
