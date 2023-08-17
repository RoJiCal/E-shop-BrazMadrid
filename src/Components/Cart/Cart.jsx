
import Store from "../../store/Context"

export default function ListCart(props) {
    const { item } = props
    const { removeItemCart } = Store()


    // //Große Cases
    const raiseSize = () => {
        console.log('checking size for item', item);
        let newSize;
        switch (item.selectedSize) {
            case 'S':
                newSize = 'M';
                break;
            case 'M':
                newSize = 'L';
                break;
            case 'L':
                newSize = 'XL';
                break;
            default:
        }
        console.log('new size', newSize);
        item.selectedSize = newSize;

        console.log('updated item', item)
        
    }

    return(
        <>
         <div className="cart_center">

<div className="cart_item">
    <img src={item.image} alt="" />
    <div>
        <h3>{item.title}</h3>
        <p className="price">{item.price} €</p>
    </div>
    <div>
       <box-icon name="up-arrow" type="solid" onClick={raiseSize}></box-icon>

       <p className="size">
        {item.selectedSize}
       </p>

       <box-icon name="down-arrow" type="solid"></box-icon>
    </div>
    <div className="remove_item" onClick={() => {removeItemCart(item.cartEntryId)}}>
        <box-icon name="trash" ></box-icon>
    </div>
</div>

</div>

        </>
    )
}