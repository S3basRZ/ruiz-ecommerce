import "./style.css";
import data from "../MockData";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = () => {
  const onAdd = (cantidad) => {
    alert(`Se agregaron ${cantidad} de Item`);
  };

  const [items, setItems] = useState([]);
  const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  useEffect(() => {
    getData.then((result) => {
      setItems(result);
      console.log(result);
    });
  }, []);

  return (
    <div>
      {items.length > 0 ? (
        <ItemList itemsList={items} />
      ) : (
        <div className="Loading">Cargando...</div>
      )}
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;