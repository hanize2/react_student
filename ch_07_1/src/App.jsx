import { useState } from "react";
import { Card } from "./components/Card";
import AdminFlagContext from "./components/providers/AdminFlagContext";

export const App = () => {
  // 관리자 플래그
  const [isAdmin, setIsAdmin] = useState(false);

  // 전환 클릭 시
  const onClickSwitch = () => setIsAdmin(!isAdmin);

  // Provider를 사용해 Context의 값을 변경할 수 있다.
  // App 컴포넌트에서 바로 Provider에 value를 넣어줬다. 이 방식보다 ch_07의 방식이 더 확장성이 좋은 방식이다.
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
