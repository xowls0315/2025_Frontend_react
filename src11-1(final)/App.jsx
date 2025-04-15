import { useEffect, useState } from "react";
import Product from "./Product";

function App() {
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((v) => {
        setOriginalData(v.products); // 전체 저장
        setData(v.products); // 초기에는 전체 보여줌
      });
  }, []);

  const showAll = () => {
    setData(originalData);
  };

  const showAboveRating = (minRating) => {
    const filtered = [...originalData].filter(
      (product) => product.rating >= minRating
    );
    setData(filtered);
  };

  return (
    <>
      <button onClick={showAll}>전체보기</button>
      <button onClick={() => showAboveRating(4)}>4점 이상만 보기</button>
      <button onClick={() => showAboveRating(3)}>3점 이상만 보기</button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "150px",
        }}
      >
        {data.map((v) => (
          <Product image={v.thumbnail} title={v.title} rating={v.rating} />
        ))}
      </div>
    </>
  );
}

export default App;
