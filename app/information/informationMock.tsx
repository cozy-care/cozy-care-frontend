export interface informationCardProps {
  title?: string;
  imgUrl?: string;
  about?: string;
  by?: string;
  releaseDate?: string;
  edittedDate?: string;
}

export const informationMock: informationCardProps[] = [
  {
    title: "ฟอกไตคืออะไร",
    imgUrl: "/info1.png",
    about: "สุขภาพ ความรู้",
    by: "นายสุข",
    releaseDate: "4 เมษายน 2568",
    edittedDate: "4 เมษายน 2568",
  },
  {
    title: "การดูแลสุขภาพเบื้องต้น",
    imgUrl: "/info2.png",
    about: "สุขภาพ เคล็ดลับ",
    by: "นางรักษ์",
    releaseDate: "10 เมษายน 2568",
    edittedDate: "10 เมษายน 2568",
  },
  {
    title: "ออกกำลังกายให้เหมาะสม",
    imgUrl: "/info3.png",
    about: "สุขภาพ การออกกำลังกาย",
    by: "หมอสมสุข",
    releaseDate: "15 เมษายน 2568",
    edittedDate: "15 เมษายน 2568",
  },
  {
    title: "โภชนาการที่ดี",
    imgUrl: "/info4.png",
    about: "สุขภาพ โภชนาการ",
    by: "คุณปรุง",
    releaseDate: "20 เมษายน 2568",
    edittedDate: "20 เมษายน 2568",
  },
  {
    title: "เทคโนโลยีเพื่อสุขภาพ",
    imgUrl: "/info5.png",
    about: "สุขภาพ นวัตกรรม",
    by: "วิศวกรสุขภาพ",
    releaseDate: "25 เมษายน 2568",
    edittedDate: "25 เมษายน 2568",
  },
];