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

export const CssModules = () => {
    return (
        <div className={classes.container}>
            <p className={classes.title}>CSS Modules입니다</p>
            <button className={classes.button}>버튼</button>
        </div>
    );
};
