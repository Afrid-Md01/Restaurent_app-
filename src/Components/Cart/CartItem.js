import classes from './CartItem.module.css'
function CartItem(props){
    const price=`Rs.${props.price}`
    return (
        <li>
            <div className={classes['cart-item']}>
                <h2>{props.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{price}</span>
                    <span className={classes.amount}>x{props.amount}</span>
                </div>
                <div className={classes.actions}>
                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
            </div>
            </div>
        </li>
    )
}

export default CartItem;