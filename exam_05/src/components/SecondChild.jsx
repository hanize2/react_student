const SecondChild = () => {
  console.log("SecondChild가 렌더링되었습니다.");

  return (
    <div className="card bg-info text-white mt-2">
      <div className="card-body">
        <h5 className="card-title">자식 컴포넌트2</h5>
      </div>
    </div>
  );
};

export default SecondChild;
