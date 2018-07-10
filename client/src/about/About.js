import React, { Component } from 'react';
import {Header, Container, Image, Grid } from 'semantic-ui-react';
import './About.css';
import YNP from '../ynp/YNP';

export default class About extends Component {
  render () {
    return (
      <div className='about-page'>
        <Container style={{ marginTop: '1em' }}>        
          <Header as='h1' className='header' ><strong>Yellowstone Odyssey</strong></Header> 
          
          <Grid stackable>
            <Grid.Column width={8}>
            <Header as='h2' dividing>Welcome to Yellowstone</Header> 
                <p>	A wide number of Native American tribes and bands have called this beautiful area home for more than 11,000 years. In the early-mid 1800’s European Americans began to explore the Greater Yellowstone region. The first organized expedition took place in 1870, leading to Yellowstone National Park being established in 1872. Yellowstone National Park was signed into law on March 1, 1872 by President Ulysses S. Grant.
</p>
                <p>Today, Yellowstone National Park protects over 2.2 million acres in Montana, Idaho, and Wyoming. Yellowstone is well known for its diverse populations of flora and fauna and its hundreds of unique ‘other-worldy’ geothermal features. The park contains about 500 active geysers, 150 of which are concentrated in one square mile, making this area the most densely populated geyser region in the world.</p>
                <p> We hope you enjoy your experience while navigating the Yellowstone Odyssey and learning more about the first national park of the United States!</p>
                <YNP />
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
                <Image
                  alt="a buffalo in winter"
                  bordered
                  size='large'
                  src='https://images.unsplash.com/photo-1490260400179-d656f04de422?dpr=1&auto=format&fit=crop&w=1234&q=60&cs=tinysrgb'
                />
                <a href='http://www.freepik.com/free-vector/set-of-cards-with-flat-wild-animals_1218846.htm'>Designed by Freepik</a>
            </Grid.Column>          
          </Grid>
        </ Container>
      </div>
    );
  }
}