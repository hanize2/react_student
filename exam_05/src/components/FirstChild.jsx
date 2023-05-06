import { memo } from "react";
import SecondChild from "./SecondChild";

const FirstChild = memo(({ resetCnt }) => {
  console.log("FirstChild가 렌더링되었습니다.");

  return (
    <div className="card bg-warning btn-sm text-white">
      <div className="card-body">
        <h5 className="card-title">자식 컴포넌트1</h5>
        <button className="w-100 btn btn-success" onClick={resetCnt}>
          0으로 초기화
        </button>
        <SecondChild />
      </div>
    </div>
  );
});

export default FirstChild;
