import React, { Component } from 'react';
import FeatureCards from '../featurecards/FeatureCards';
export default class Products extends Component {
  render () { 
    return (
      <div>
        <h1>Products</h1>
        <FeatureCards />
      </div>
    );
  }
}