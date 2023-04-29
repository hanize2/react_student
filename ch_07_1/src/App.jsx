import { useContext } from "react";

import { AdminFlagContext } from "./components/providers/AdminFlagProvider";
import { Card } from "./components/Card";

export const App = () => {
  // Context 안의 isAdmin과 업데이트 함수를 얻는다
  const { state, actions } = useContext(AdminFlagContext);

  // 전환 클릭 시
  const onClickSwitch = () => actions.setIsAdmin(!state.isAdmin);

  return (
    <div>
      {state.isAdmin ? (
        <span>관리자입니다</span>
      ) : (
        <span>관리자가 아닙니다</span>
      )}
      <button onClick={onClickSwitch}>전환</button>
      <Card />
    </div>
  );
};