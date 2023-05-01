import React from "react";
import useInputs from "./useInputs";

// input이 많아져도 코드가 간결하게 유지될 수 있다.
const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
    email: "",
  });
  const { name, nickname, email } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
        <input name="email" value={email} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
        <div>
          <b>이메일: </b> {email}
        </div>
      </div>
    </div>
  );
};

export default Info;
