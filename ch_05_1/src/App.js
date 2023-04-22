import {
  CssModules,
  CssModulesMany,
  CssModulesClassNames,
  CssModulesConditions,
} from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { TailwindCss } from "./components/TailwindCss";

export const App = () => {
  return (
    <div>
      {/* CSS Modules 방식 */}
      <CssModules />
      {/* CSS Modules 방식 */}
      <CssModulesMany />
      {/* CSS Modules 방식 */}
      <CssModulesClassNames />
      {/* CSS Modules 방식 */}
      <CssModulesConditions isActiveButton="off" />
      {/* StyledJsx 방식 */}
      <StyledJsx />
      <StyledComponents />
      {/* TailwindCss 패키지 활용 */}
      <TailwindCss />
    </div>
  );
};
