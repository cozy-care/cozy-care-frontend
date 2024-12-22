// caregiverMock.ts
export interface CaregiverCardProps {
  name?: string;
  imgUrl?: string;
  service?: string;
  skill?: string;
  dateReady?: string;
  distance?: number;
}

export const caregiverMock: CaregiverCardProps[] = [
  {
    name: "Alice Johnson",
    imgUrl: "/alice-johnson-profile.png",
    service: "Elderly Care",
    skill: "Companionship",
    dateReady: "2024-12-20",
    distance: 5,
  },
  {
    name: "Bob Smith",
    imgUrl: "/bob-smith-profile.png",
    service: "Child Care",
    skill: "Teaching Assistance",
    dateReady: "2024-12-18",
    distance: 10,
  },
  {
    name: "Charlie Brown",
    imgUrl: "/charlie-brown-profile.png",
    service: "Disability Support",
    skill: "Sign Language",
    dateReady: "2024-12-15",
    distance: 3,
  },
  {
    name: "Daisy Green",
    imgUrl: "/daisy-green-profile.png",
    service: "Nursing Care",
    skill: "Medication Management",
    dateReady: "2024-12-22",
    distance: 7,
  },
  {
    name: "Ethan Wright",
    imgUrl: "/ethan-wright-profile.png",
    service: "Mental Health Support",
    skill: "Counseling",
    dateReady: "2024-12-17",
    distance: 8,
  },
];
