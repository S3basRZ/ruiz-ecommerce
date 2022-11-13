import data from "../MockData"
import "./ItemDetail.css"


const ItemDetail = (itemDetail) => {

    const {name, description ,image, price} = itemDetail;
    return (
            <>
            <div className='ItemImgDetail'>
                <img className='ImgDetail' src={image} alt={name}/>
            </div>
            <div className='ItemDetail'>
                <p className='nameDetail'>{name}</p>
                <p className='priceDetail'>{price}</p>
                <p className='descDetail'>{description}</p>

            </div>
            </>
);
};
export default ItemDetail;