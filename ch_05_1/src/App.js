import {
  CssModules,
  CssModulesMany,
  CssModulesClassNames,
} from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { TailwindCss } from "./components/TailwindCss";

// 1. inline-style
// 가장 흔한 일반 방식. css 파일 import 해서 해당 css의 class 등을 그대로 사용.
// 별도의 스타일링 시스템 적용 하지 않고 기존 존재하는 css를 그대로 활용할때 사용
export const App = () => {
  return (
    <div>
      {/* CSS Modules 방식 */}
      <CssModules />
      {/* CSS Modules 방식 */}
      <CssModulesMany />
      {/* CSS Modules 방식 */}
      <CssModulesClassNames />
      {/* StyledJsx 방식 */}
      <StyledJsx />
      <StyledComponents />
      {/* TailwindCss 패키지 활용 */}
      <TailwindCss />
    </div>
  );
};
