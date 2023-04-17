import './ch_05.css';

const fontStyle = {
  fontSie: "1em",
};

// 1. inline-style
// 가장 흔한 일반 방식. css 파일 import 해서 해당 css의 class 등을 그대로 사용.
// 별도의 스타일링 시스템 적용 하지 않고 기존 존재하는 css를 그대로 활용할때 사용
export const App = () => {
  return (
    <>
    <div className="container">
      <p className="title">가장 일반적인 inline-style 방식입니다.</p>
      <button className="button">버튼</button>
    </div>
    <div className="container">
      <p style={{ fontSize: "2em" }}>직접기술 방식입니다.</p>
      <button className="button">버튼</button>
    </div>
    <div className="container">
      <p className={fontStyle}>사전 정의 후 지정 방식입니다.</p>
      <button className="button">버튼</button>
    </div>
    </>
  );
};
