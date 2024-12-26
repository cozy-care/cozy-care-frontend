// caregiverMock.ts
export interface CaregiverCardProps {
  firstname?: string;
  lastname?: string;
  certification_image?: string;
  expert?: string;
  skill?: string;
  available_time?: string;
  distance?: number;
}

export const caregiverMock: CaregiverCardProps[] = [
  {
    firstname: "Alice",
    lastname: "Johnson",
    certification_image: "/alice-johnson-profile.png",
    expert: "Elderly Care",
    skill: "Companionship",
    available_time: "2024-12-20",
    distance: 5,
  },
  {
    firstname: "Bob",
    lastname: "Smith",
    certification_image: "/bob-smith-profile.png",
    expert: "Child Care",
    skill: "Teaching Assistance",
    available_time: "2024-12-18",
    distance: 10,
  },
  {
    firstname: "Charlie",
    lastname: "Brown",
    certification_image: "/charlie-brown-profile.png",
    expert: "Disability Support",
    skill: "Sign Language",
    available_time: "2024-12-15",
    distance: 3,
  },
  {
    firstname: "Daisy",
    lastname: "Green",
    certification_image: "/daisy-green-profile.png",
    expert: "Nursing Care",
    skill: "Medication Management",
    available_time: "2024-12-22",
    distance: 7,
  },
  {
    firstname: "Ethan",
    lastname: "Wright",
    certification_image: "/ethan-wright-profile.png",
    expert: "Mental Health Support",
    skill: "Counseling",
    available_time: "2024-12-17",
    distance: 8,
  },
];