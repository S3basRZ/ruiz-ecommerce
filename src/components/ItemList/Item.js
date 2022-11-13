import "./style.css"

const Item = ({name, description,image, price}) => {
    return (
    <div>
        <img className="img-p" src={image} alt={name}/>
        <p className="name-p">{name}</p>
        <p className="description-p">{description}</p>
        <p className="price-p">{price}</p>
    </div>
    );
};

export default Item;