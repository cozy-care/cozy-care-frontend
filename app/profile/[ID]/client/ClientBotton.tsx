import { Button } from "@nextui-org/react";
import Link from "next/link";
import axios from "axios";
import { Delete } from "@mui/icons-material";

interface Props {
  sub_client_id?: string;
  firstname?: string;
  lastname?: string;
  onDelete?: (sub_client_id: string) => void; // เพิ่ม callback สำหรับลบข้อมูล
}

export default function ClientBotton({
  sub_client_id = "",
  firstname = "",
  lastname = "",
  onDelete,
}: Props) {

  // ฟังก์ชันลบ SubClient
  const handleDelete = async (event: React.MouseEvent) => {
    event.preventDefault(); // ป้องกันการนำทางไปหน้า `/patient/${sub_client_id}`

    if (!sub_client_id) return;

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/client/delete-sub-client`, {
        sub_client_id
      });

      console.log(`Deleted sub_client_id: ${sub_client_id}`);

      // ถ้ามี `onDelete` ให้เรียกใช้งานเพื่ออัปเดต UI
      if (onDelete) {
        onDelete(sub_client_id);
      }
    } catch (error) {
      console.error("Error deleting sub client:", error);
    }
  };

  return (
    <Button
      as={Link}
      href={`/patient/${sub_client_id}/edit`}
      className="justify-between"
      endContent={
        <Delete
          style={{ width: "25px", height: "auto" }}
          onClick={handleDelete} // เรียกใช้ฟังก์ชันลบเมื่อคลิก
        />
      }
    >
      {firstname} {lastname}
    </Button>
  );
}
