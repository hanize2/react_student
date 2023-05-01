import { useState } from "react";

import { AdminFlagContext } from "./components/providers/AdminFlagProvider";
import { Card } from "./components/Card";

export const App = () => {
  // 관리자 플래그
  const [isAdmin, setIsAdmin] = useState(false);

  // 전환 클릭 시
  const onClickSwitch = () => setIsAdmin(!isAdmin);

  // ch_07 예제와는 다르게 App 컴포넌트에서 Provider로 감싸줬다.
  // 이렇게하면 childern까지 감싸지 않아서 childern을 자식 컴포넌트에게는 던져주지 않는다.
  // 굳이 childern을 자식 컴포넌트에 던져줄 필요가 없고 간단히 사용하려면 본 예제처럼 사용하면 된다.
  return (
    <div>
      {isAdmin ? <span>관리자입니다</span> : <span>관리자가 아닙니다</span>}
      <button onClick={onClickSwitch}>전환</button>
      <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
        <Card />
      </AdminFlagContext.Provider>
    </div>
  );
};
