import React, {Component} from 'react';

import classes from './Ing.css';

class Ing extends Component {
    render() {
        return(
            <div className={classes.container}>

                <div className={classes.left}>
                <p id="label">Choose your ingredients</p>
<p>
	<input type="checkbox" id="test1" />
	<label for="test1" aria-describedby="label">Chicken</label>
</p>

<p>
	<input type="checkbox" id="test1" />
	<label for="test1" aria-describedby="label">Corn</label>
</p>

<p>
	<input type="checkbox" id="test1" />
	<label for="test1" aria-describedby="label">Bread</label>
</p>

<p>
	<input type="checkbox" id="test1" />
	<label for="test1" aria-describedby="label">Milk</label>
</p>

<p>
	<input type="checkbox" id="test1" />
	<label for="test1" aria-describedby="label">Paneer</label>
</p>

                </div>

                <div className={classes.right}>
                    <h1><span className={classes.name}>5 December 2020, Sat</span></h1><br/><br/>
                    <div className={classes.start}>
                    <a href="/recepie" className={classes.h2} >Recepies &#10095;</a>
                    </div>
                    
                </div>

            </div>
            
        )
    }
}

export default Ing;