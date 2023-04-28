import { useContext } from "react";
import AdminFlagContext from "./providers/AdminFlagContext";

const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px",
};

export const EditButton = () => {
  // Context 안의 Admin을 얻는다
  const { isAdmin } = useContext(AdminFlagContext);

  return (
    <button style={style} disabled={!isAdmin}>
      수정
    </button>
  );
};
