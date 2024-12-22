// patientMock.ts
export interface PatientCardProps {
  name?: string;
  imgUrl?: string;
  serviceNeed?: string;
  skillNeed?: string;
  dateReady?: string;
  distance?: number;
}

export const patientMock: PatientCardProps[] = [
  {
    name: "Alice Johnson",
    imgUrl: "/alice-johnson-profile.png",
    serviceNeed: "Elderly Care",
    skillNeed: "Companionship",
    dateReady: "2024-12-20",
    distance: 5,
  },
  {
    name: "Bob Smith",
    imgUrl: "/bob-smith-profile.png",
    serviceNeed: "Child Care",
    skillNeed: "Teaching Assistance",
    dateReady: "2024-12-18",
    distance: 10,
  },
  {
    name: "Charlie Brown",
    imgUrl: "/charlie-brown-profile.png",
    serviceNeed: "Disability Support",
    skillNeed: "Sign Language",
    dateReady: "2024-12-15",
    distance: 3,
  },
  {
    name: "Daisy Green",
    imgUrl: "/daisy-green-profile.png",
    serviceNeed: "Nursing Care",
    skillNeed: "Medication Management",
    dateReady: "2024-12-22",
    distance: 7,
  },
  {
    name: "Ethan Wright",
    imgUrl: "/ethan-wright-profile.png",
    serviceNeed: "Mental Health Support",
    skillNeed: "Counseling",
    dateReady: "2024-12-17",
    distance: 8,
  },
];
