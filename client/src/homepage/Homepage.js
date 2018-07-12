import React, { Component } from 'react';
import FeatureCards from '../featurecards/FeatureCards'; 
import {Link} from 'react-router-dom';
import {Header, Icon, Button, Container, Divider } from 'semantic-ui-react';

export default class Homepage extends Component {
  render () {
    return (
      <div> 
        <FeatureCards order="random" limit="3" /> 
        <Divider section />
        <Container textAlign='left' text >
          <Container textAlign='center'>
            <Icon name='tree' size="big" fitted /><Icon name='tree' size="huge" fitted /><Icon name='tree' size="big" fitted />
          </Container>
          <Header as='h2' icon textAlign='center'>
            The Product Management 
          </Header>
          <p>View some amazing products</p>

          <Container textAlign='center'>
            <Button primary content='Get Started' icon='right arrow' size="medium" labelPosition='right' as={Link} to='/sights' />
          </Container>
        </Container>     
      </div>
    );
  }
}