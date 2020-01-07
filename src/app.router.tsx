import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './views/home/';
import Layout from './components/layout';

class AppRouter extends React.Component<any, any> {
	render() {
		return (
			<Router>
				<Layout>
					<Route exact path="/" component={Home} />
				</Layout>
			</Router>
		);
	}
}

export default AppRouter;
