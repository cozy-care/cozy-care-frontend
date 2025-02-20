export interface ClientProps {
  firstname?: string;
  lastname?: string;
  userId?: string;
}

export const clientMock: ClientProps[] = [
  { firstname: "นายริดเดช", userId: "user_001" },
  { firstname: "ผู้รับการดูแล 2", userId: "user_002" },
  { firstname: "สองสี", lastname: "สามใบ", userId: "user_003" },
  { firstname: "ผู้รับการดูแล 4", userId: "user_004" },
  { firstname: "นายสมบัติ", lastname: "โชคดี", userId: "user_005" },
  { firstname: "นางสาวจันทรา", lastname: "สว่าง", userId: "user_006" },
  { firstname: "นางสมหญิง", lastname: "จริงใจ", userId: "user_007" },
];
