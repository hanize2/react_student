import React, { useState, useMemo, useRef, useCallback } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산중..");

  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b); // numbers 배열의 모든 값을 더해준다.
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null); // useRef(Hook)를 사용하여 ref를 설정하면 useRef를 통해 만든 객체안의 current 값이 실제 DOM 요소를 가리킨다.

  // input 값이 바뀔때 마다 State도 바뀌면서 재렌더링되면서 함수도 재 생성된다.
  const onChange = (e) => {
    setNumber(e.target.value);
  };

  // const onChange = useCallback((e) => {
  //   console.log("onChange 함수 실행...");
  //   setNumber(e.target.value);
  // }, []); // 컴포넌트가 처음 렌더링 될 때만 함수 생성. 함수 재 생성을 막는다.

  const onInsert = () => {
    const nextList = list.concat(parseInt(number)); // concat() 함수를 이용해 배열을 재생성해준다
    setList(nextList); // 재생성된 배열값으로 list값 update
    setNumber(""); // number 값 빈값으로 update. input에 입력된 값을 지움.
    inputEl.current.focus(); // inputEl.current는 <inpur> DOM 노드를 가리키게 된다. 따라서 input에 포커스를 위치시킨다.
  };

  // const onInsert = useCallback(() => {
  //   const nextList = list.concat(parseInt(number));
  //   setList(nextList);
  //   setNumber("");
  //   inputEl.current.focus();
  // }, [number, list]); // number 혹은 list가 바뀌었을 때만 함수 생성

  // const avg = getAverage(list);

  // input 값이 바뀔때 마다 getAverage 함수가 재 실행 되기에 특정값이 바뀔때만 재렌더링 하도록 수정.
  // list값이 바뀔때만 getAverage 함수 실행
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      {/* 컴포넌트에서 DOM에 직접 접근하기 위해 ref 사용 */}
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b>
        {avg}
      </div>
    </div>
  );
};

export default Average;
