// patientMock.ts
export interface PatientCardProps {
  firstname?: string;
  lastname?: string;
  profile_image?: string;
  type?: string;
  skill_need?: string;
  available_time?: string;
  distance?: number;
}

export const patientMock: PatientCardProps[] = [
  {
    firstname: "Alice",
    lastname: "Johnson",
    profile_image: "/alice-johnson-profile.png",
    type: "Elderly Care",
    skill_need: "Companionship",
    available_time: "2024-12-20",
    distance: 5,
  },
  {
    firstname: "Bob",
    lastname: "Smith",
    profile_image: "/bob-smith-profile.png",
    type: "Child Care",
    skill_need: "Teaching Assistance",
    available_time: "2024-12-18",
    distance: 10,
  },
  {
    firstname: "Charlie",
    lastname: "Brown",
    profile_image: "/charlie-brown-profile.png",
    type: "Disability Support",
    skill_need: "Sign Language",
    available_time: "2024-12-15",
    distance: 3,
  },
  {
    firstname: "Daisy",
    lastname: "Green",
    profile_image: "/daisy-green-profile.png",
    type: "Nursing Care",
    skill_need: "Medication Management",
    available_time: "2024-12-22",
    distance: 7,
  },
  {
    firstname: "Ethan",
    lastname: "Wright",
    profile_image: "/ethan-wright-profile.png",
    type: "Mental Health Support",
    skill_need: "Counseling",
    available_time: "2024-12-17",
    distance: 8,
  },
];