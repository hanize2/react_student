import { useState } from "react";
import FirstChild from "./components/FirstChild";

const Exam2 = () => {
  console.log("Root 컴포넌트가 렌더링되었습니다.");

  const [num, setNum] = useState(0);

  const increaseCnt = () => {
    setNum(num + 1);
  };

  return (
    <>
      <div className="form-div-exam d-flex flex-column mb-3 justify-content-center align-items-center">
        <p></p>
        <h1 className="h3 mb-3 fw-normal">2. 재렌더링 막기</h1>

        <div className="card text-center" style={{ width: "30rem" }}>
          <div className="card-body">
            <h5 className="card-title">ROOT 컴포넌트</h5>

            <FirstChild />

            <button
              onClick={increaseCnt}
              className="w-100 btn btn-outline-primary mt-2"
            >
              +1 증가
            </button>
            <p>{num}</p>
          </div>
        </div>
      </div>

      <div>
        <ol className="list-group list-group">
          <li className="list-group-item">
            문제 1) +1 증가 버튼 클릭 시 자식 컴포넌트가 재렌더링 되는 현상을
            막아주세요.
          </li>
          <li className="list-group-item">
            문제 1-참고) 브라우저/개발자 모드/콘솔 창에 렌더링 메세지가 출력되는
            것을 보고 "Root 컴포넌트가 렌더링되었습니다." 만 나오도록 한다면
            재렌더링이 일어나지 않는것입니다.
          </li>
          <li className="list-group-item">
            문제 2) 초기화 버튼 클릭 시 값을 0으로 초기화하는 기능을 추가하고
            버튼 클릭 시 재렌더링이 되지 않도록 막아주세요.
          </li>
        </ol>
      </div>
    </>
  );
};

export default Exam2;
