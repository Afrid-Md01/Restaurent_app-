import React from 'react';
import mealsImage from '../../Assets/mealsImage.jpg';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
export default function Header(props){
    return(
        <React.Fragment>
            <header className={classes.header}>
                <h1>Restaurant app</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='Table full of some delicious food'/>
            </div>
        </React.Fragment>
    )
}