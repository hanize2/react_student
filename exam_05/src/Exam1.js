import EmailInputComponents from "./components/EmailInputComponents";
import PwdInputComponents from "./components/PwdInputComponents";
import exam1Gif from "./exam1.gif";

const Exam1 = () => {
  return (
    <>
      <main className="form-signin w-100 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">로그인 해주세요...</h1>

          <div className="form-floating">
            <EmailInputComponents />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <PwdInputComponents />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            로그인
          </button>
        </form>
      </main>
      <div>
        <ol className="list-group list-group">
          <li className="list-group-item">
            <img alt="참고화면" src={exam1Gif} />
          </li>
          <li className="list-group-item">
            문제 1) EmailInputComponents, PwdInputComponents를 Styled Component
            로 만들어 주세요.
          </li>
          <li className="list-group-item">
            문제 1-참조) Email, Pwd 컴포넌트 CSS는 exam1.css 파일안의 CSS를
            사용하세요.
          </li>
          <li className="list-group-item">
            문제 2) 로그인 버튼을 화면처럼 bootstrap CSS로 꾸며주세요.
          </li>
          <li className="list-group-item">
            문제 2-참조){" "}
            <a
              href="https://getbootstrap.kr/docs/5.2/components/buttons/"
              target="_blank"
              rel="noreferrer"
            >
              https://getbootstrap.kr/docs/5.2/components/buttons/
            </a>
            메뉴얼을 참조하세요.
          </li>
        </ol>
      </div>
    </>
  );
};

export default Exam1;
