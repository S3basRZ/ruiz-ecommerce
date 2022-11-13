import data from "../MockData";
import {useState, useEffect} from 'react';
import ItemDetail from "./ItemDetail";
import "./ItemDetail.css"

const ItemDetailContainter = () => {
    const [item, setItem] = useState();
    const getItem = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(data[0,1]);
        }, 2000)
    })
    useEffect(() => {
        getItem.then((result) => {
            setItem(result);
            console.log(result);
        })
    }, [])
    return (
        <div id='ItemDetailContainter'>
            <ItemDetail itemDetail {...item}/>
        </div>
    );
};
export default ItemDetailContainter;