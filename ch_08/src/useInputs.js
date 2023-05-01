import { useReducer } from "react";

// 컴포넌트 업데이트로직을 분리하였다.
// useReducer에서 action은 그 어떤값으로도 사용가능.
// 여기에선 이벤트 객체가 지니고 있는 e.target 값 자체를 액션 값으로 사용.
function reducer(state, action) {
  return {
    ...state, // spread 연산자로 불변성을 유지시켜준다.
    [action.name]: action.value, // action 객체의 name 속성과 value 속성을 새로운 state의 해당 속성으로 설정하여 상태를 업데이트
  };
}

/*
여러 컴포넌트에서 비슷한 기능을 공유할 경우 이를 커스텀 Hook으로 만들어 분리시킬 수 있다.
useInputs 함수는 커스텀 Hook이다.
useInputs 함수는 initialForm을 인자로 받아서 useReducer를 통해 state와 dispatch 함수를 생성하고,
onChange 함수를 정의하여 dispatch 함수를 실행.
onChange 함수는 input 요소의 onChange 이벤트에 등록되어 호출된다.
e.target 객체를 dispatch 함수에 전달하여 action을 생성하고, reducer 함수를 실행하여 state를 업데이트한다.
결과적으로 useInputs 훅은 state와 onChange 함수를 반환하며, 이를 사용하여 React 컴포넌트에서 상태 관리를 할 수 있다.
*/
export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    // onChange 함수는 dispatch 함수를 실행해주는 역할
    dispatch(e.target);
  };
  return [state, onChange];
}
