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

import classes from "./CssModules.module.scss";
import classNames from "classnames/bind";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>CSS Modules입니다.. 1개 class 사용</p>
      <button className="btn btn-primary">버튼</button>
    </div>
  );
};

export const CssModulesMany = () => {
  return (
    <div className={`${classes.container} ${classes.container}`}>
      {/* 여러개 class 삽입 시 JS의 템플릿 리터럴 사용 */}
      <p className={classes.title}>CSS Modules입니다.. 여러개 class 사용</p>
      <button className={classes.button}>버튼</button>
    </div>
  );
};

// classes.container 이렇게 매번 classes.[클래스 이름] 이런식으로 사용하기 귀찮다~
// 좋은 제품 소개합니다...
// npm install classnames

const cx = classNames.bind(classes);

export const CssModulesClassNames = () => {
  return (
    <div className={cx("container", "container2")}>
      {/* <div className={cx(`container container`)}>
        혹은 이렇게 템플릿 리터럴로..이렇게하면 중복된 class 도 체크된다.
        */}
      <p className={classes.title}>
        CSS Modules입니다.. classnames lib 사용으로 여러개 class 사용
      </p>
      <button className={classes.button}>버튼</button>
    </div>
  );
};
