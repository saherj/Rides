import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, TextInput, Image, Easing } from 'react-native';
export default class FerrisScreen extends Component {
 
 

animation = new Animated.Value(0);
fadeValue = new Animated.Value(0);
springValue = new Animated.Value(0);
rotationValue = new Animated.Value(0);

 componentDidMount() {
   Animated.timing(this.animation, {
     duration: 6000,
     toValue: 1
   }).start()

   Animated.timing(this.fadeValue, {
    duration: 4000,
    toValue: 1
  }).start()

   Animated.spring(this.springValue, {
    toValue: 100,
    speed: 0,
    bounciness:100
  }).start()

  Animated.timing(this.rotationValue, {
    duration: 6000,
     toValue: 1,
     easing: Easing.linear,
     useNativeDriver: true
  }).start()

 }
    render() {
        return (
            
                <View style={styles.container}>

                    <Animated.Text style={{...styles.text, opacity: this.fadeValue}}>Ferris Wheel</Animated.Text>
                    
                    <Animated.View style={{...styles.itemPosition, right:this.springValue}}>
                        <Image style={styles.mainimage} source={ require('./assets/cloud.png')}/>
                    </Animated.View>

                    <Animated.View style={{...styles.itemPosition, left:this.springValue}}>
                        <Image style={styles.mainimage} source={ require('./assets/cloud.png')}/>
                    </Animated.View>
                
                    <View>
                        <Image style={styles.mainimage} source={ require('./assets/londoneye.png')}/>
                        
                        <Animated.View style = {{
                        ...styles.dot,
                        transform: [
                            {
                            rotate: this.rotationValue.interpolate({
                                inputRange: [0,1],
                                outputRange:['0deg', '360deg']
                            }),
                            },
                            { 
                                translateX: this.rotationValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: [102, 110]
                                })
                            }

                        ],
                        opacity: this.rotationValue
                        }}> 
                        </Animated.View>
                    
                    </View>
                

                    <View style={styles.container}>

                        <Animated.View style={{...styles.itemPosition, right:this.springValue}}>
                        <Image style={styles.mainimage} source={ require('./assets/basketball.png')}/>
                        </Animated.View>

                        <Animated.View style={{...styles.ballonsPosition, bottom:this.springValue}}>
                        <Image style={styles.mainimage} source={ require('./assets/balloons.png')}/>
                        </Animated.View>

                    </View>

                </View>
        
        );
    }
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
 },

 text: {
   color: 'purple',
   fontSize: 30,
   paddingVertical:20,
   fontFamily: 'EuphemiaUCAS-Bold',
   marginTop:40,
   marginHorizontal:100,
 }, 

mainImage: {
    marginVertical: 50,
},

 itemPosition: {
    backgroundColor: 'transparent',
    marginHorizontal:40,
    
 },

 ballonsPosition: {
      
     backgroundColor: 'transparent',
     marginBottom:-150,
     marginTop: -80,
     marginRight:80,
 },

 dot: {
    height: 20,
    width: 20,
    backgroundColor: 'red',
    borderRadius: 50,
    alignContent:'center',
    marginTop:-150,
    marginHorizontal:115,
    
  }
});