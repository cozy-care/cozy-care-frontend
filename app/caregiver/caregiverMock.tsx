// caregiverMock.ts
export interface CaregiverCardProps {
  user_id: string;
  firstname?: string;
  lastname?: string;
  profile_image?: string;
  want_client_type?: string;
  more_skill?: string;
  available_time?: string;
  distance_km?: number;
}

export const caregiverMock: CaregiverCardProps[] = [
  {
    user_id: "1",
    firstname: "Alice",
    lastname: "Johnson",
    profile_image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    want_client_type: "Elderly Care",
    more_skill: "Companionship",
    available_time: "2024-12-20",
    distance_km: 5,
  },
  {
    user_id: "2",
    firstname: "Bob",
    lastname: "Smith",
    profile_image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    want_client_type: "Child Care",
    more_skill: "Teaching Assistance",
    available_time: "2024-12-18",
    distance_km: 10,
  },
  {
    user_id: "3",
    firstname: "Charlie",
    lastname: "Brown",
    profile_image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    want_client_type: "Disability Support",
    more_skill: "Sign Language",
    available_time: "2024-12-15",
    distance_km: 3,
  },
  {
    user_id: "4",
    firstname: "Daisy",
    lastname: "Green",
    profile_image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    want_client_type: "Nursing Care",
    more_skill: "Medication Management",
    available_time: "2024-12-22",
    distance_km: 7,
  },
  {
    user_id: "5",
    firstname: "Ethan",
    lastname: "Wright",
    profile_image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    want_client_type: "Mental Health Support",
    more_skill: "Counseling",
    available_time: "2024-12-17",
    distance_km: 8,
  },
];