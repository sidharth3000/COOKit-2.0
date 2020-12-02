import React, {Component} from 'react';

import classes from './Check.css';

class Check extends Component {
    render() {
        return(
            <div class="pretty p-default">
            <input type="checkbox" />
            <div class="state p-success">
                <label>Success</label>
            </div>
        </div>
            
        )
    }
}

export default Check;