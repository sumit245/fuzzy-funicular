import React from 'react'
import { StyleSheet, View } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { theme } from '../core/theme'

const StartScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Water Management Portal</Header>
    <Paragraph>
      Please click on this button to proceed.
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>


  </Background>
)


const styles = StyleSheet.create({
  footer: {
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
  },

});

export default StartScreen
