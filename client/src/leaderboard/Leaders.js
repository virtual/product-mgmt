import React, { Component } from 'react';
import { Table, Header, Image } from 'semantic-ui-react'
const axios = require('axios');

export default class Leaders extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
    this.fetchUser = this.fetchUser.bind(this);
  }
  componentDidMount(){
    this.fetchUser()
  }
  
  fetchUser() {
    axios.post('/scoreInfoByEmail', {email: this.props.email}).then((res)=> {
      if (res !== undefined) {   
        this.setState({ 
          user: res.data
        });
      }  else {
        console.log('undefined');
      }
    }, function(err){
      console.log(err);
    });
  }

  render () {
    let img = "/img/avatars/default.png";
    if(this.state.user.img) {
      img = "/img/avatars/" + this.state.user.img
    }
    return (
      
    <Table.Row key={this.props.email}>
      <Table.Cell>
        <Header as='h4' image>
          <Image src={img} shape='rounded' size='mini' />
          <Header.Content>
            {this.state.user.firstName}  
            <Header.Subheader>{this.props.email}</Header.Subheader>
          </Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell textAlign="center">{this.props.score}</Table.Cell>
    </Table.Row>
    );
  }
}