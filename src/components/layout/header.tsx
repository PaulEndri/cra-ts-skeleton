import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Header = () => (
	<Menu as="div" inverted className="app-header" attached="top" fluid>
		<Menu.Item as={Link} to={'/'} key={'home'}>
			'Ok'
		</Menu.Item>
	</Menu>
);

export default Header;
