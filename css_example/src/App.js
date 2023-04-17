import { Sample } from "./components/Sample";

function App() {
  return (
    <div className="container text-center">
      <div className="row align-items-center">
        <div className="col">
          <p>* 자~ 여기서 부터 시작해보세요....</p>
          <p>* 여기에서 레이아웃 및 폼 요소들을 모두 완성한 다음 컴포넌트로 나눠보세요...</p>
          <p>* bootstrap에서 제공하는 css class들은 전역으로 사용하면 됩니다.</p>
          <Sample />
        </div>
      </div>
    </div>
  );
}

export default App;
