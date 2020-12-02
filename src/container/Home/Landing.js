import React, {Component} from 'react';

import classes from './Landing.css';

class Signin extends Component {
    render() {
        return(
            <div className={classes.container}>

                <div className={classes.left}>
                    <p  className={classes.head}>1. Take a look at your fridge.</p>
                    <p  className={classes.head}>2. Tell us the items you have in there.</p>
                    <p  className={classes.head}>3. Make a delicious recepie out of them before they go stale.</p>
                    <p  className={classes.head}>4. Enjoy!</p>
                </div>

                <div className={classes.right}>
                    <h1><span className={classes.name}>COOKit</span><span className={classes.plain}> .com</span></h1><br/><br/>
                    <div className={classes.start}>
                        <p className={classes.h1}>Let's see what you</p>
                        <a href="/ing" className={classes.h2} >Have today  &#10095;</a>
                    </div>
                    
                </div>

            </div>
            
        )
    }
}

export default Signin;