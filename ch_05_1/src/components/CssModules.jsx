// export const CssModules = () => {
//     return (
//         <div>
//             <p>CSS Modules 입니다,</p>
//             <button>버튼</button>
//         </div>
//     );
// };

// 교재 p.135의 내용 직접 작성
// 파일 작성 후 npm 패키지 설치
// 주의!! 현재 react 18.0 이상에선 교재의 내용대로 install 시 오류가 날 수 있음.
// 해당 패키지 버전을 8.0이상으로 설치
// npm install node-sass@8.0

// global(전역) css class를 사용하고자 할땐 문자열로 적어준다.
// className = { "container"} 해당 container css class는 컴포넌트 local이 아닌 전역(index.css 등) 에서 가져온 css 이다.
// 전역 css class는 고유 이름이 붙지 않고 local만 고유 이름이 붙는다. 브라우저 소스 보기 참고
import style from "./CssModules.module.scss";
import classNamesBind from "classnames/bind";
// import classNames from "classnames";

export const CssModules = () => {
  return (
    <div className={style.container}>
      <p className={style.title}>CSS Modules입니다.. 1개 class 사용</p>
      <button className={style.button}>버튼</button>
    </div>
  );
};

export const CssModulesMany = () => {
  return (
    <div className={`${style.container} ${style.container}`}>
      {/* 여러개 class 삽입 시 JS의 템플릿 리터럴 사용 */}
      <p className={style.title}>CSS Modules입니다.. 여러개 class 사용</p>
      <button className={style.button}>버튼</button>
    </div>
  );
};

// style.container 이렇게 매번 style.[클래스 이름] 이런식으로 사용하기 귀찮다~
// 좋은 제품 소개합니다...
// npm i classnames

const cx = classNamesBind.bind(style); // style에서 받아온 class들을 cx 이름에 바인딩 시킨다.

export const CssModulesClassNames = () => {
  return (
    <div className={cx("container", "container2")}>
      {/* <div className={cx(`container container`)}>
        혹은 이렇게 템플릿 리터럴로..이렇게하면 중복된 class 도 체크된다.
        */}
      <p className={style.title}>
        CSS Modules입니다.. classnames lib 사용으로 여러개 class 사용
      </p>
      <button className={style.button}>버튼</button>
    </div>
  );
};

// 조건에 따른 css class 적용
export const CssModulesConditions = (props) => {
  const activeCss = props.isActiveButton === "on";

  return (
    <div className={style.container}>
      <p className={style.title}>CSS Modules입니다.. 값 넘기기</p>
      <button className={cx({ button: activeCss })}>버튼</button>
    </div>
  );
};
