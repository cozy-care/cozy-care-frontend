// patientMock.ts
export interface PatientCardProps {
  name?: string;
  profileURL?: string;
  serviceNeed?: string;
  skillNeed?: string;
  dateReady?: string;
  distance?: number;
}

export const patientMock: PatientCardProps[] = [
  {
    name: "Alice Johnson",
    profileURL: "/alice-johnson-profile.png",
    serviceNeed: "Elderly Care",
    skillNeed: "Companionship",
    dateReady: "2024-12-20",
    distance: 5,
  },
  {
    name: "Bob Smith",
    profileURL: "/bob-smith-profile.png",
    serviceNeed: "Child Care",
    skillNeed: "Teaching Assistance",
    dateReady: "2024-12-18",
    distance: 10,
  },
  {
    name: "Charlie Brown",
    profileURL: "/charlie-brown-profile.png",
    serviceNeed: "Disability Support",
    skillNeed: "Sign Language",
    dateReady: "2024-12-15",
    distance: 3,
  },
  {
    name: "Daisy Green",
    profileURL: "/daisy-green-profile.png",
    serviceNeed: "Nursing Care",
    skillNeed: "Medication Management",
    dateReady: "2024-12-22",
    distance: 7,
  },
  {
    name: "Ethan Wright",
    profileURL: "/ethan-wright-profile.png",
    serviceNeed: "Mental Health Support",
    skillNeed: "Counseling",
    dateReady: "2024-12-17",
    distance: 8,
  },
];
