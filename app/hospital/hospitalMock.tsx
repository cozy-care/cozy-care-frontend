export interface informationCardProps {
  title?: string;
  imgUrl?: string;
  type?: string;
  expertise?: string;
  emergencyNumbers?: string;
  phoneNumber?: string;
  distance?: string;
}

export const informationMock: informationCardProps[] = [
  {
    title: "บริษัท น้ำทิพย์เนิร์สซิ่งโฮม จำกัด",
    imgUrl: "/info1.png",
    type: "ลักษณะที่ 3",
    phoneNumber: "081-940-1948",
    distance: "4 กิโลเมตร",
  },
  {
    title: "โรงพยาบาลสมิติเวชศรีนครินทร์",
    imgUrl: "/info2.png",
    type: "โรงพยาบาลเอกชน",
    expertise: "ทั่วไป",
    emergencyNumbers: "02-376-9191",
    phoneNumber: "02-022-2222 ",
    distance: "4 กิโลเมตร",
  },
  {
    title: "โรงพยาบาลผู้สูงอายุกล้วยน้ำไท 2",
    imgUrl: "/info3.png",
    type: "โรงพยาบาลเอกชน",
    expertise: " เวชศาสตร์ผู้สูงอายุ",
    emergencyNumbers: "ไม่มี",
    distance: "4 กิโลเมตร",
  },
  {
    title: "โรงพยาบาลบุรีรัมย์",
    imgUrl: "/info4.png",
    type: "โรงพยาบาลของรัฐ",
    expertise: "เวชศาสตร์ผู้สูงอายุ",
    emergencyNumbers: " ไม่มี",
    phoneNumber: "044615002",
    distance: "100 กิโลเมตร",
  },
];
