export interface PatientCardProps {
  user_id: string;
  firstname?: string;
  lastname?: string;
  profile_image?: string;
  client_type?: string;
  con_dis?: string;
  available_time?: string;
  distance?: number;
}

export const patientMock: PatientCardProps[] = [
  {
    user_id: "1",
    firstname: "Alice",
    lastname: "Johnson",
    profile_image: "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
    client_type: "Elderly Care",
    con_dis: "Companionship",
    available_time: "2024-12-20",
    distance: 5,
  },
  {
    user_id: "2",
    firstname: "Bob",
    lastname: "Smith",
    profile_image: "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
    client_type: "Child Care",
    con_dis: "Teaching Assistance",
    available_time: "2024-12-18",
    distance: 10,
  },
  {
    user_id: "3",
    firstname: "Charlie",
    lastname: "Brown",
    profile_image: "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
    client_type: "Disability Support",
    con_dis: "Sign Language",
    available_time: "2024-12-15",
    distance: 3,
  },
  {
    user_id: "4",
    firstname: "Daisy",
    lastname: "Green",
    profile_image: "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
    client_type: "Nursing Care",
    con_dis: "Medication Management",
    available_time: "2024-12-22",
    distance: 7,
  },
  {
    user_id: "5",
    firstname: "Ethan",
    lastname: "Wright",
    profile_image: "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
    client_type: "Mental Health Support",
    con_dis: "Counseling",
    available_time: "2024-12-17",
    distance: 8,
  },
];