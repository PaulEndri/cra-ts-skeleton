import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from './header';

interface LayoutProps {
	children: any;
}

const Layout = ({ children }: LayoutProps) => (
	<div className="app-base-view">
		<Header />
		<Container fluid className="app-base-content">
			{children}
		</Container>
	</div>
);

export default Layout;
