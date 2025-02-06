export interface CaregiverCardProps {
  user_id: string;
  firstname?: string;
  lastname?: string;
  profile_image?: string;
  want_client_type?: string;
  more_skill?: string;
  available_time?: string;
  distance_km?: number;
  height?: number;
  weight?: number;
  study_experience?: string;
  price?: string;
  used_language?: string;
  experience?: string;
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
    height: 165,
    weight: 60,
    study_experience: "Nursing Degree",
    price: "50",
    used_language: "English, Spanish",
    experience: "5",
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
    height: 175,
    weight: 70,
    study_experience: "Early Childhood Education",
    price: "40",
    used_language: "English",
    experience: "3",
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
    height: 180,
    weight: 75,
    study_experience: "Special Education",
    price: "55",
    used_language: "English, ASL",
    experience: "7",
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
    height: 160,
    weight: 55,
    study_experience: "Registered Nurse",
    price: "60",
    used_language: "English, French",
    experience: "10",
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
    height: 170,
    weight: 68,
    study_experience: "Psychology Degree",
    price: "45",
    used_language: "English, German",
    experience: "6",
  },
];
