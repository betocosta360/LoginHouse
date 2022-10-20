import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Icon from '@expo/vector-icons/FontAwesome'
Icon.loadFont();


import * as Animatable from 'react-native-animatable'

const SignUp = ({navigation}) => {

  return (
    <ImageBackground source={require('../../assets/images/casa.jpg')} style={styles.container}>
      <View style={styles.overlayBackground}>
        <View style={styles.containerLogo}>
          <Image source={require('../../assets/images/logo1.png')} />
        </View>

        <View style={styles.containerForm}>
          <TouchableOpacity style={styles.buttonSignIn} onPress={() => navigation.navigate('Welcome')}>
            <Text style={styles.buttonTextSignIn}>SIGN IN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSignUp} onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.buttonTextSignUp}>SIGN UP</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.title}>CRIE A SUA CONTA</Text>
          <TextInput
            style={styles.inputName}
            placeholder='Digite seu nome ...'
          />
          <Icon name='user' style={styles.iconUser} />



          <TextInput
            style={styles.inputMail}
            placeholder='Digite seu email ...'
          />
          <Icon name='envelope' style={styles.iconMail} />

          <TextInput
            style={styles.inputPass}
            placeholder='Digite sua senha ...'
          />
          <Icon name='key' style={styles.iconPass} />



          <TouchableOpacity style={styles.buttonProcess} onPress={() => navigation.navigate('Welcome')}>
            <Text style={styles.textButtonProcess}>CRIAR CONTA</Text>
            <Icon name='arrow-right' style={styles.iconProcess} />
          </TouchableOpacity>
          <View style={styles.containerCheckbox}>
          <BouncyCheckbox 
          
           size={20}
           fillColor="#4CB8C4"
           unfillColor="#FFFFFF"
           text="LI E ACEITO OS TERMOS"
           iconStyle={{ borderColor: "red" }}
           innerIconStyle={{ borderWidth: 2 }}
           textStyle={{ color: '#FFF', textAlign: 'center' }}
          onPress={() => {}} />

          </View>
        </View>
        
      </View>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',


  },
  overlayBackground: {
    flex: 1,
    backgroundColor: 'rgba(161,164,106, .7)',


  },
  containerLogo: {
    paddingVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',

  },

  containerForm: {
    alignSelf: 'center',
    flexDirection: 'row',
  },

  buttonSignIn: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    paddingEnd: 20,

  },

  buttonTextSignIn: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4CB8C4',
    padding: 5,
    textAlign: 'center'

  },

  buttonTextSignUp: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    padding: 5
  },

  buttonSignUp: {
    padding: 15,
    backgroundColor: '#4CB8C4',
    borderColor: '#4CB8C4',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingEnd: 20

  },

  inputContainer: {
    flex: 1,
    margin: 30,
    
  },

  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'white',
  },

  inputName: {
    borderWidth: 1,
    borderColor: '#FFF',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    paddingRight: 5,
    backgroundColor: '#FFF'
  },

  inputPass: {
    borderWidth: 1,
    borderColor: '#FFF',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    paddingRight: 5,
    backgroundColor: '#FFF'
  },

  inputMail: {
    borderWidth: 1,
    borderColor: '#FFF',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    paddingRight: 5,
    backgroundColor: '#FFF'
  },

  buttonProcess: {
    backgroundColor: '#4CB8C4',
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20
  },
  textButtonProcess: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
  },
  iconUser: {
    position: 'absolute',
    right: 20,
    paddingVertical: '18%',
    fontSize: 25,
    color: '#4CB8C4'
  },
  iconPass: {
    position: 'absolute',
    right: 20,
    paddingVertical: '60%',
    fontSize: 25,
    color: '#4CB8C4'
  },

  iconMail: {
    position: 'absolute',
    right: 20,
    paddingVertical: '40%',
    fontSize: 25,
    color: '#4CB8C4'
  },

  iconProcess: {
    position: 'absolute',
    right: 20,
    paddingVertical: 10,
    fontSize: 25,
    color: '#FFF'
  },
  lineStyle: {
    borderWidth: 0.3,
    borderColor: 'white',
    margin: 5,
    marginBottom: 20

  },

  trocarSenha: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold'
  },

  containerCheckbox:{
    flexDirection: 'row',
    marginLeft: 45
  },



})

export default SignUp