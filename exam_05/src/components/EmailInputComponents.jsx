import styled from "styled-components";

// 여기에 styled component CSS를 만들어 주세요.
const SEmailInput = styled.input`
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
`;

/*
해당 input의
type은 email
id는 floatingInput
placeholder는 name@example.com
class는 form-control 을 적용해 주세요.
*/
const EmailInputComponents = () => {
  return (
    <SEmailInput
      type="email"
      className="form-control"
      id="floatingInput"
      placeholder="name@example.com"
    />
  );
};

export default EmailInputComponents;
