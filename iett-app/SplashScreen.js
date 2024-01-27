import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import MainScreen from './MainScreen.js';
import  App from './App.js';


const SplashScreen = () => {
  const bridgeOpacity = useRef(new Animated.Value(0)).current;
  const mosqueOpacity = useRef(new Animated.Value(0)).current;
  const towerOpacity = useRef(new Animated.Value(0)).current;
  const seaOpacity = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    Animated.sequence([
      Animated.timing(bridgeOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(mosqueOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(towerOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(seaOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Animasyonlar tamamlandıktan sonra yapılacak işlemler
    });
  }, []);

  return (
    <View style={styles.container}>
            <View style={styles.morArkaPlan} />
            <View style={styles.yuvarlak}></View>


     <Animated.Image
  source={require('./assets/bridge.png')}
  style={[styles.bridge, { opacity: bridgeOpacity, zIndex: 2}]}
/>

      <Animated.Image
        source={require('./assets/mosque.png')}
        style={[styles.icon, { opacity: mosqueOpacity,  right: 1, bottom: 240, zIndex:1,}]}
      />
      <Animated.Image
  source={require('./assets/tower.png')}
  style={[styles.icon, { opacity: towerOpacity, right:173, bottom:260, zIndex:1, }]}
/>
<Animated.Image
  source={require('./assets/sea.png')}
  style={[styles.sea, { position: 'absolute',   }]}
/>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  icon: {
    width: 250, 
    height: 250, 
    position: 'absolute', 
  },
  bridge: {
    width: 400,
    height:300,
    bottom: 210,
  },
  sea: {
    width: 400,
    height: 310,
    bottom: 0,
    top: '60%'
  },
  morArkaPlan: {
    height: 400,
    backgroundColor: '#685789',
    width: '100%',
    top:'-21%',
    marginHorizontal: 50,
  },
  yuvarlak: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 100,
    bottom: 250,
  },


});

export default SplashScreen;
