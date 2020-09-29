import React from 'react';
import {Route} from 'react-router-dom'


import Landing from './container/Home/Landing.js';

function App() {
  return (
  	<div>
		<div>
		<Route path="/" exact component={Landing} />
	</div>

	</div>
  );
}

export default App;