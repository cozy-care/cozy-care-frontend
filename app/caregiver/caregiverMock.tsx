// caregiverMock.ts
export interface CaregiverCardProps {
  user_id: string;
  firstname?: string;
  lastname?: string;
  profile_image?: string;
  expert?: string;
  skill?: string;
  available_time?: string;
  distance?: number;
}

export const caregiverMock: CaregiverCardProps[] = [
  {
    user_id: "1",
    firstname: "Alice",
    lastname: "Johnson",
    profile_image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    expert: "Elderly Care",
    skill: "Companionship",
    available_time: "2024-12-20",
    distance: 5,
  },
  {
    user_id: "2",
    firstname: "Bob",
    lastname: "Smith",
    profile_image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    expert: "Child Care",
    skill: "Teaching Assistance",
    available_time: "2024-12-18",
    distance: 10,
  },
  {
    user_id: "3",
    firstname: "Charlie",
    lastname: "Brown",
    profile_image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    expert: "Disability Support",
    skill: "Sign Language",
    available_time: "2024-12-15",
    distance: 3,
  },
  {
    user_id: "4",
    firstname: "Daisy",
    lastname: "Green",
    profile_image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    expert: "Nursing Care",
    skill: "Medication Management",
    available_time: "2024-12-22",
    distance: 7,
  },
  {
    user_id: "5",
    firstname: "Ethan",
    lastname: "Wright",
    profile_image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    expert: "Mental Health Support",
    skill: "Counseling",
    available_time: "2024-12-17",
    distance: 8,
  },
];