import React, {Component} from 'react';

import classes from './recepie.css';

import chillie from '../../assets/chillie.jpg';

class Recepie extends Component {
    render() {
        return(
            <div className={classes.container}>

                <div className={classes.left}>
                    <h3>Recepie</h3>
                    <p  className={classes.head}>1. Season the chicken with salt and pepper.</p>
                    <p  className={classes.head}>2.Shallow fry for a few minutes on each side, until golden brown.</p>
                    <p  className={classes.head}>3.Add the peppers and fry for another couple of minutes...</p>
                    {/* <p  className={classes.head}>In the same pan, add the garlic, red chilli, soy sauce, tomato purée, and water. </p> */}
                </div>

                <div className={classes.right}>
                    <h1><span className={classes.name}>Chillie Chicken</span></h1><br/><br/>
                    <div className={classes.start}>
                    <img src={chillie} className={classes.chicken}/>
                    </div>
                    
                </div>

            </div>
            
        )
    }
}

export default Recepie;