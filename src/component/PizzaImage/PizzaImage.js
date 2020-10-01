import React from 'react';
import classes from './PizzaImage.module.css'
import pizza from '../../assets/img/pizza.jpg';

function PizzaImage(props) {
    return (
        <div className={classes.PizzaImage}>
            <img src={pizza} className={classes.pizza} />
        </div>
    );
}

export default PizzaImage;