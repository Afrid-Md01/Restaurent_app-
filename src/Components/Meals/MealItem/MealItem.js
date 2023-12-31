import MealItemForm from './MealItemForm'
import classes from './MealItem.module.css'
import { useContext } from 'react';
import CartContext from '../../../Store/cartContext';

export default function MealItem(props){
    const cartCtx=useContext(CartContext);
    const price=`Rs.${props.price}`;

    const addtoCartHandler=amount=>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })
    }
    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addtoCartHandler}/>
            </div>
        </li>
    )
}