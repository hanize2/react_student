
const style = {
  height: "50px",
  backgroundColor: "lightgray",
};

export const Child2 = () => {
  console.log("Child2 렌더링");

  return (
    <div style={style}>
      <p>Child2</p>
    </div>
  );
};
