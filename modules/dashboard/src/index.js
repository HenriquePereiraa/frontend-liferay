import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from "react-redux";


import AppComponent from './AppComponent';
// import store from './store';

export default function main(params) { 
	 ReactDOM.render(
			<AppComponent 
				portletNamespace={params.portletNamespace} 
				contextPath={params.contextPath}
				portletElementId={params.portletElementId}
				configuration={params.configuration}
			 />, 
		// <Provider store={store}>
		// </Provider>,
		document.getElementById(params.portletElementId)
	);
}