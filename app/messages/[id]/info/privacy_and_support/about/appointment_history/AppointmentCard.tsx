import { useState } from "react";
import { Button } from "@nextui-org/react";
import { AccessTime, History, QuestionMark, ThumbDown, ThumbUp } from "@mui/icons-material";

interface Props {
  date?: string;
  detail?: string;
  cost?: number;
  status?: string; // "Like", "Unlike", "Ongoing"
  remark?: string;
}

export default function AppointmentCard({
  date = "11 ธันวาคม 2024",
  detail = "defaultDetail",
  cost = 1000,
  status = "Like",
  remark = "DefaultRemark"
}: Props) {
  const [isToggle, setIsToggle] = useState<boolean>(false);


  const cardToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <Button onPress={cardToggle} disableAnimation radius="md" className="flex flex-col justify-start w-full h-max bg-white shadow-lg p-0 gap-0">
      <div className="flex justify-start w-full gap-3 px-3 py-3">
        <div className="w-[30px] h-auto aspect-square flex self-start"><History sx={{ width: 'auto', height: 'auto' }} /></div>

        <div className="flex flex-col items-start h-max gap-2 text-base">
          <p>วันที่ {date}</p>
          <p>รายละเอียดงาน : {detail}</p>
          <p>ราคา : {cost} บาท/วัน</p>
        </div>

        <div className={`w-[30px] h-auto aspect-square self-end ml-auto`}>
          {status === "Like" ? (
            <ThumbUp sx={{ width: 'auto', height: 'auto', color: '#09D810' }} />
          ) : status === "Unlike" ? (
            <ThumbDown sx={{ width: 'auto', height: 'auto', color: '#FF0101' }} />
          ): status === "Ongoing" ?(
            <AccessTime sx={{ width: 'auto', height: 'auto', color: '#f89233' }} />
          ) : (
            <QuestionMark sx={{ width: 'auto', height: 'auto', color: '#f89233' }} />
          )}
        </div>
      </div>

      {isToggle && (
        <div className={`flex flex-col w-full h-max items-start px-3 py-3 gap-3 ${status === "Like" ? "bg-[#B7FFBA]" : status === "Unlike" ? "bg-[#FFB6B6]" : status === "Ongoing" ? "bg-[#ffd2a6]" : "bg-[#ffd2a6]"}`}>
          <p className="text-base">หมายเหตุ : {remark}</p>
        </div>
      )}
    </Button>
  );
}