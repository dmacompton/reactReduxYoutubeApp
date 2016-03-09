import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBIb0tM2WoWGd8X9kGsl40Oov-cdSqFWhM';

const App = () => {
	return (
		<div>
			<SearchBar/>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('.container'));