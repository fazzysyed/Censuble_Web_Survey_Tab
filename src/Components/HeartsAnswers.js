import React, {useState, useEffect} from 'react';

import {HeartsAnswersTypes} from '../helper/AnswersType'
// const {height, width} = Dimensions.get('window');

const HeartsAnswers = ({onPress, value,minimize}) => {
  const [defaultRating, setDefaultRating] = useState(value);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);


  return (
    <div style={{
      justifyContent: 'space-evenly',
      marginHorizontal: '17%',
      flexDirection: 'row',

    }} >
      {HeartsAnswersTypes.map((item, index) => {
        return (
          <div 
            className={minimize ? "heart1-tab"  : "heart1"  }     
            key={item.id}
            onClick={() => {
              setDefaultRating(item.id);
              onPress(item);
            }}>
            <img className={minimize ? "heart-image-tab" : "heart-image"}
              resizeMode="contain"
              
              src={item.id <= defaultRating ? item.selected : item.un}
            />
           
            {index === 0 ? (
              <p className= {minimize ? "worst-tab worst-heart-tab" : "worst worst-heart"} style={{
                color: 'black',
                fontFamily: 'Poppins-Bold',
                
              }}>Worst Rating</p>
            ) : null}
            {index === HeartsAnswersTypes.length - 1 ? (
              <p className={minimize ? "best-tab best-heart-tab" : "best best-heart"} style={{
                color: 'black',
                fontFamily: 'Poppins-Bold',
                
              }}>Best Rating</p>
            ) : null}
          </div>
        );
      })}
      {/* <Text style={{fontSize: 50, fontWeight: 'bold'}}>{1 + 1}</Text> */}
    </div>
  );
};

export default HeartsAnswers;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 10,
//     justifyContent: 'center',
//     textAlign: 'center',
//   },
//   titleText: {
//     padding: 8,
//     fontSize: 16,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   textStyle: {
//     textAlign: 'center',
//     fontSize: 23,
//     color: '#000',
//     marginTop: 15,
//   },
//   textStyleSmall: {
//     textAlign: 'center',
//     fontSize: 16,
//     color: '#000',
//     marginTop: 15,
//   },
//   buttonStyle: {
//     justifyContent: 'center',
//     flexDirection: 'row',
//     marginTop: 30,
//     padding: 15,
//     backgroundColor: '#8ad24e',
//   },
//   buttonTextStyle: {
//     color: '#fff',
//     textAlign: 'center',
//   },
 
  
// });
