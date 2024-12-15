// caregiverMock.ts
export interface CaregiverCardProps {
    name?: string;
    profileURL?: string;
    service?: string;
    skill?: string;
    dateReady?: string;
    distance?: number;
  }
  
  export const caregiverMock: CaregiverCardProps[] = [
    {
        name: "Alice Johnson",
        profileURL: "/alice-johnson-profile.png",
        service: "Elderly Care",
        skill: "Companionship",
        dateReady: "2024-12-20",
        distance: 5,
      },
      {
        name: "Bob Smith",
        profileURL: "/bob-smith-profile.png",
        service: "Child Care",
        skill: "Teaching Assistance",
        dateReady: "2024-12-18",
        distance: 10,
      },
      {
        name: "Charlie Brown",
        profileURL: "/charlie-brown-profile.png",
        service: "Disability Support",
        skill: "Sign Language",
        dateReady: "2024-12-15",
        distance: 3,
      },
      {
        name: "Daisy Green",
        profileURL: "/daisy-green-profile.png",
        service: "Nursing Care",
        skill: "Medication Management",
        dateReady: "2024-12-22",
        distance: 7,
      },
      {
        name: "Ethan Wright",
        profileURL: "/ethan-wright-profile.png",
        service: "Mental Health Support",
        skill: "Counseling",
        dateReady: "2024-12-17",
        distance: 8,
      },
  ];
  