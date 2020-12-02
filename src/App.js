import React from 'react';
import {Route} from 'react-router-dom'


import Landing from './container/Home/Landing.js';
import Ing from './container/Home/Ing.js';
import Recepie from './container/Home/recepie.js';

function App() {
  return (
  	<div>
		<div>
		<Route path="/" exact component={Landing} />
		<Route path="/ing" exact component={Ing} />
		<Route path="/recepie" exact component={Recepie} />
	</div>

	</div>
  );
}

export default App;