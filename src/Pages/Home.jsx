import React from "react";
import { Category, SortPopUp, PizzaBlock } from "../Components";

function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Category
          onClickhand={(name) => console.log(name)}
          items={["Мясные", "Вегитарианская", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopUp
          items={[
            { name: "популярности", type: "popular" },
            { name: "цене", type: "price" },
            { name: "алфавиту", type: "alphabet" },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default Home;
