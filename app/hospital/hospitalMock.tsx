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
    imgUrl:
      "https://lh3.googleusercontent.com/proxy/8KOwNByUhD24oLqiBN95FXgS4dqeER2ZyAkTuVXlEOE9LCw3O7Iwn012a8d96tKUNRrohyb4fpa54DmO-3eEEni_k42dqBSsQs8kzk1cnsYv3yW1cgSvq7K1p0ki5S7y",
    type: "ลักษณะที่ 3",
    phoneNumber: "081-940-1948",
    distance: "4 กิโลเมตร",
  },
  {
    title: "โรงพยาบาลสมิติเวชศรีนครินทร์",
    imgUrl:
      "https://static.hd.co.th/system/hospitals/images/000/000/094/original/samitivej_srinakarin_hospital_01.jpg",
    type: "โรงพยาบาลเอกชน",
    expertise: "ทั่วไป",
    emergencyNumbers: "02-376-9191",
    phoneNumber: "02-022-2222 ",
    distance: "4 กิโลเมตร",
  },
  {
    title: "โรงพยาบาลผู้สูงอายุกล้วยน้ำไท 2",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVcdLWgj8wFWzJpZYwMduzsbL81rajfU_1fg&s",
    type: "โรงพยาบาลเอกชน",
    expertise: " เวชศาสตร์ผู้สูงอายุ",
    emergencyNumbers: "ไม่มี",
    distance: "4 กิโลเมตร",
  },
  {
    title: "โรงพยาบาลบุรีรัมย์",
    imgUrl:
      "https://www.tsco.or.th/public/photo/hospital/1682948369_95b744e8c9497fa237ad.jpg",
    type: "โรงพยาบาลของรัฐ",
    expertise: "เวชศาสตร์ผู้สูงอายุ",
    emergencyNumbers: " ไม่มี",
    phoneNumber: "044615002",
    distance: "100 กิโลเมตร",
  },
];
