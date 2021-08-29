import React from 'react';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// const greatActive = require('../Assets/Images/great_icon_active.png');
// const great = require('../Assets/Images/great_icon.png');
class Faces extends React.Component {
  render() {
    return (
      <div
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginVertical: 10,
          alignItems: 'center',
        }}>
        <div onClick={this.props.onPress}>
          <div
            style={{
              backgroundColor: 'transparent',
              // height: '90%', // 70% of height device screen
              width: '100%',
            }}>
            {/* <img className="images-survey"
              resizeMode="contain"
              src={this.props.image}
              style={{
                height: '100%', // 70% of height device screen
                width: '20%',
                float: 'left',
                
                marginTop:'50px', 
              }}
            /> */}

          <img className= {this.props.minimize ? "images-survey-tab big-responsive-tab"  : "images-survey big-responsive"}
              resizeMode="contain"
              src= {this.props.image} 
              style={{
                height: '100%', // 70% of height device screen
                width: '25%',
                float: 'left',
                
                marginTop:'50px', 
              }}
            />
            <p>{this.props.value}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Faces;