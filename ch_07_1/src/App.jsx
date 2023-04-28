import { useState } from "react";
import { Card } from "./components/Card";
import AdminFlagContext from "./components/providers/AdminFlagContext";

export const App = () => {
  // 관리자 플래그
  const [isAdmin, setIsAdmin] = useState(false);

  // 전환 클릭 시
  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
      <div>
        {isAdmin ? <span>관리자입니다</span> : <span>관리자가 아닙니다</span>}
        <button onClick={onClickSwitch}>전환</button>
        <Card />
      </div>
    </AdminFlagContext.Provider>
  );
};
