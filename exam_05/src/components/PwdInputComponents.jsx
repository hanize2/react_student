import styled from "styled-components";

// 여기에 styled component CSS를 만들어 주세요.
const SPwdInput = styled.input`
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

/*
해당 input의
type은 password
id는 floatingPassword
placeholder는 Password
class는 form-control 을 적용해 주세요.
*/
const PwdInputComponents = () => {
  return (
    <SPwdInput
      type="password"
      className="form-control"
      id="floatingPassword"
      placeholder="Password"
    />
  );
};

export default PwdInputComponents;
