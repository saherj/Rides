import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Animated, Easing, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

var { width, height } = Dimensions.get('window');
export default class WaterScreen extends Component {
  
    
    
  constructor(props) {
      super(props);
      this.state = {
        // fadeValue: new Animated.Value(0),
        xValue: new Animated.Value(0),
      }
  }

  //fadeAnimation = () => {
    // Animated.timing(this.state.fadeValue, {
       // toValue:1,
       // duration:2000,
    // }).start();
  //}

  moveAnimation = () => {
    Animated.timing(this.state.xValue, {
        toValue: width - 200,
        duration:2000,
        easing: Easing.back(),
        easing: Easing.cubic,
    }).start(() => {
        Animated.timing(this.state.xValue, {
            toValue: 0,
            duration:2000,
            easing: Easing.linear,
        }).start(); 
    });
  }



  
    render() {
      return (

        <View style={styles.container}>

            <Animated.Text style={styles.text}>Water Slide</Animated.Text>
            
            <Image style={styles.mainimage} source={ require('./assets/slide.png')}/>
        
            <Animated.View style={{...styles.waterwave1,
                // {opacity: this.state.fadeValue}
                left: this.state.xValue}}>
            </Animated.View>

            <Animated.View style={{...styles.waterwave4,
                right: this.state.xValue}}>
            </Animated.View>

            <Animated.View style={{...styles.waterwave2,
                left: this.state.xValue}}>
            </Animated.View>

            <Animated.View style={{...styles.waterwave2,
                left: this.state.xValue}}>
            </Animated.View>

            <Animated.View style={{...styles.waterwave3,
                right: this.state.xValue}}>
            </Animated.View>

            <Animated.View style={{...styles.waterwave1,
                left: this.state.xValue}}>
            </Animated.View>

            <Animated.View style={{...styles.waterwave3,
                right: this.state.xValue}}>
            </Animated.View>
            
            <Animated.Image source = {require('./assets/dolphin.png')} 
                style={{...styles.mediumImage, opacity: this.state.fadeValue}}>
            </Animated.Image>
            
            <Animated.View style={{...styles.waterwave2,
                left: this.state.xValue}}>
            </Animated.View>
                
            <TouchableOpacity style= {styles.button} onPress={this.moveAnimation}>
                <Text style={styles.buttonText}>Animation</Text>
            </TouchableOpacity>

        
        </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    mainimage: {
        
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:80,
        
    },

    waterwave1: {
        width:100,
        height: 15, 
        backgroundColor: '#8fe0f5',
        borderRadius: 30,
        marginLeft:10,
        marginVertical:10,
    },

    waterwave2: {
        width:100,
        height: 15, 
        backgroundColor: '#b5e9f8',
        borderRadius: 30,
        marginLeft:100,
        marginVertical:10,
    },

    waterwave3: {
        width:30,
        height: 15, 
        backgroundColor: '#8fe0f5',
        borderRadius: 30,
        marginLeft:350,
        marginVertical:10,
    },

    waterwave4: {
        width:60,
        height: 15, 
        backgroundColor: '#b5e9f8',
        borderRadius: 30,
        marginLeft: 340,
        marginVertical:10,
    },

    mediumImage:{
        alignContent: 'center',
        width:100,
        height:100,
        marginLeft:150,
    },

    button:{
        backgroundColor: 'orange',
        height:45, 
        alignSelf: 'center',
    },

    buttonText:{
        color: 'white',
        padding:12, 
        paddingHorizontal: 20, 
        fontWeight:'bold',
        fontSize: 18,

    },
    
    text: {
        color: 'purple',
        fontSize: 30,
        paddingVertical:20,
        fontFamily: 'EuphemiaUCAS-Bold',
        marginTop:40,
        marginHorizontal:100,
      }, 
});