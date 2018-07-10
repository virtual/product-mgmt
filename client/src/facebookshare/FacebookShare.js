import React, { Component } from 'react'; 
import FacebookProvider, { Share } from 'react-facebook';
import { Icon } from 'semantic-ui-react'

// import Icon, {Telegram} from 'react-share-icons';
// import Facebook from 'react-share-icons/lib/Facebook'

// const {
//   FacebookShareButton,
//   TwitterShareButton,
// } = ShareButtons;

export default class FacebookShare  extends Component {
  render () {
    // let url = "http://www.facebook.com"
    return (
      <FacebookProvider appId="1916295301955813">
        <Share href="https://yellowstone-odyssey.herokuapp.com/" title="Yellowstone Odyssey" >
          <a className="ui facebook button" target="_blank" color='twitter' 
          ><Icon name='facebook' /> Share on Facebook</a> 
        </Share>
      </FacebookProvider>  
    );
  }
}