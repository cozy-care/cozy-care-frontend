interface ChatCardInterface {
  chat_id: string;
  profile_image: string;
  username: string;
  lastMessage: string;
  lastMessageTime: number;
}

export const chatCardMock: ChatCardInterface[] = [
  {
    chat_id: "123",
    profile_image: "https://entertainmentcommunity.org/sites/default/files/styles/wide/public/images/SeniorCare_0.jpg?itok=0h2Zsr7R",
    username: "Justing Wong",
    lastMessage: "Hey! How's it going?",
    lastMessageTime: 5,
  },
  {
    chat_id: "124",
    profile_image: "https://i.pravatar.cc/150?img=10",
    username: "Emily Johnson",
    lastMessage: "Can you send me the details?",
    lastMessageTime: 15,
  },
  {
    chat_id: "125",
    profile_image: "https://i.pravatar.cc/150?img=20",
    username: "Michael Brown",
    lastMessage: "I'll call you later.",
    lastMessageTime: 2,
  },
  {
    chat_id: "126",
    profile_image: "https://i.pravatar.cc/150?img=30",
    username: "Sophia Williams",
    lastMessage: "Thank you!",
    lastMessageTime: 10,
  },
  {
    chat_id: "127",
    profile_image: "https://i.pravatar.cc/150?img=40",
    username: "Chris Davis",
    lastMessage: "What's the plan?",
    lastMessageTime: 25,
  },
  {
    chat_id: "128",
    profile_image: "https://i.pravatar.cc/150?img=50",
    username: "Emma Wilson",
    lastMessage: "See you soon.",
    lastMessageTime: 1,
  },
  {
    chat_id: "129",
    profile_image: "https://i.pravatar.cc/150?img=60",
    username: "Liam Martinez",
    lastMessage: "Got it.",
    lastMessageTime: 30,
  },
  {
    chat_id: "130",
    profile_image: "https://i.pravatar.cc/150?img=70",
    username: "Olivia Garcia",
    lastMessage: "Let's catch up tomorrow.",
    lastMessageTime: 45,
  },
  {
    chat_id: "131",
    profile_image: "https://i.pravatar.cc/150?img=80",
    username: "Noah Rodriguez",
    lastMessage: "Did you finish the task?",
    lastMessageTime: 8,
  },
  {
    chat_id: "132",
    profile_image: "https://i.pravatar.cc/150?img=90",
    username: "Ava Moore",
    lastMessage: "Good night!",
    lastMessageTime: 60,
  },
];
