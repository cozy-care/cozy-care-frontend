import { Card, CardBody, Image, Button } from "@nextui-org/react";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Delete } from "@mui/icons-material";
interface Props {
  userId?: string;
  firstname?: string;
  lastname?: string;
}

export default function ClientBotton({
  userId = "",
  firstname = "",
  lastname = "",
}: Props) {
  const [user1Id, setUser1Id] = useState<string | null>(null);
  const router = useRouter();

  return (
    <Button
      as={Link}
      href={`/profile/${userId}`}
      className="justify-between"
      endContent={<Delete style={{ width: "25px", height: "auto" }} />}
    >
      {firstname} {lastname}
    </Button>
  );
}
