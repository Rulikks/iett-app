import React, { useState } from 'react';
import { View, Text, FlatList, ImageBackground, StyleSheet, data, renderItem } from 'react-native';

const MainScreen = () => {




  return (
    <ImageBackground source={require('./assets/mainbg.png')} style={styles.halfBackground}>
      <View style={styles.overlay}>
        <View style={styles.overlayContent}>
          <View style={styles.greetingContainer}>
            <Text style={styles.greetingText}>Merhaba</Text>
            <Text style={styles.nameText}>Ahmet Bey!</Text>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Balance</Text>
              <Text style={styles.infoValue}>20</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Total Trips</Text>
              <Text style={styles.infoValue}>18</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Status</Text>
              <Text style={styles.infoValue}>Student</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    right: 0,
    width: "100%",
    height: 70,
  },
  greetingContainer: {
    alignItems: 'flex-start',
  },
  greetingText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    left: 20,
    top: 20,
  },
  nameText: {
    color: 'white',
    fontSize: 15,
    left: 19,
    top: 20,
  },
  whitecontainer: {
    color: 'white',
    height: 70,
    borderRadius: 100,
  },
  infoContainer: {
    backgroundColor: 'white',
    width: '95%',
    marginLeft: '2.5%',
    top: 200,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 10,
  },
  infoRow: {
    marginBottom: 10,
    alignItems: "center"
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  infoValue: {
    fontSize: 10,
  },
  halfBackground: {
    flex: 0.5,
    resizeMode: 'cover',
  },


});


export default MainScreen;
