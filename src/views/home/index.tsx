import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<Container className="app-home-view" textAlign="center">
			<Segment>
				<Header as="h4">About This Site</Header>
				<Link to="/test" />
			</Segment>
		</Container>
	);
};

export default Home;
