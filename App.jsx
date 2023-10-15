

import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React, { useEffect, useState } from 'react';
import {

  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Alert
} from 'react-native';

import { Button, TextInput } from 'react-native-paper';
import Snackbar from 'react-native-snackbar';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
function App() {
  const [Data, setData] = useState([])
  const [LoginPage, setLoginPage] = useState(false)
  const [SignUp, setSignUp] = useState(false)
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [UserName, setUserName] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")
  // const [visible, setvisible] = useState(false)
  const [visible, setVisible] = useState(false);

  // const onToggleSnackBar = () => setVisible(!visible);

  // const onDismissSnackBar = () => setVisible(false);
  const SignUpFunc = async () => {

    // if (Email === "" || Password == "" || ConfirmPassword == "" || UserName == "") {
    if (Email === "" || Password == "") {
      Snackbar.show({
        text: "Please Fill All Fieds",
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: "red",

      })
    }
    else {
      console.log(Email, Password)
      auth().createUserWithEmailAndPassword(Email, Password).then(() => {
        console.log("Registered")
        Snackbar.show({
          text: "Registered Successfully",
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: "green",
        })
      }).catch((err) => {
        console.log(err)
        console.log(err.message)
        Snackbar.show({
          text: err.message,
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: "red",
        })
      })
      // return register//
    }
  }


  const GoogleSignIn = async () => {
    console.log("Google Clicked")
    try {
      await GoogleSignin.hasPlayServices()
      GoogleSignin.configure({
        webClientId: "411009944078-1p00hfhld8vckspicvf7355j6rf41bl4.apps.googleusercontent.com",
        offlineAccess: true,
        hostedDomain: "",
        forceCodeForRefreshToken: true,
        accountName: ""
      })
      const { idToken } = await GoogleSignin.signIn();
      const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(googleCredentials);
      console.log('User Info:', userCredential.user);
      return userCredential.user;
      // const userInfo = await GoogleSignin.signIn();
      // const { idToken } = await GoogleSignin.signIn();
      // console.log(idToken)
      // const googleCredentials = await auth.GoogleAuthProvider.credential(idToken)
      // console.log(googleCredentials)

      // await auth().signInWithCredential(googleCredentials)
      // console.log(userInfo)
      // return userInfo


    } catch (err) {
      console.error('Google Sign-In Error:', err);
    }
  }
  return (
    <SafeAreaView>
      <View style={styles.body}>
        {!SignUp && <View style={{ position: 'absolute', top: 40 }}>
          <Image source={require('./Assessts/logo.png')} />
        </View>}
        {LoginPage ?
          SignUp ?
            <>
              <View style={{ position: 'absolute', top: 40, left: 10 }}>
                <Text style={{ color: "white", textAlign: "left" }} onPress={() => setSignUp(false)}>
                  {/* <IconButton
                    icon="camera"
                    iconColor={MD3Colors.error50}
                    size={20}
                    onPress={() => console.log('Pressed')}
                  /> */}
                  Back
                </Text>
              </View>
              <View style={{ position: 'absolute', top: 80, alignItems: "center", }}>
                <Text style={{
                  fontWeight: `bold`,
                  margin: 15,
                  textAlign: "center",
                  fontSize: 20,
                  color: "white",
                }}>
                  Sign Up !
                </Text>

              </View>

              <View style={styles.loginPage}>
                <View>
                  <Text style={{ color: "#000000", fontSize: 25, textAlign: "center", margin: 10 }}>
                    Hello!
                  </Text>
                </View>
                <View>

                  <View style={{ marginBottom: 30 }}>
                    <TextInput
                      label="User Name"
                      // secureTextEntry
                      onChangeText={(e) => setUserName(e)}
                      right={<TextInput.Icon icon="lock" />}
                    // left={}
                    />
                  </View>
                  <View>
                    <TextInput
                      label="Email"
                      onChangeText={(e) => setEmail(e)}
                    // secureTextEntry
                    // right={<TextInput.Icon icon="eye" />}
                    />
                  </View>
                  <View style={{ marginBottom: 30, marginTop: 30 }}>
                    <TextInput
                      label="Password"
                      secureTextEntry
                      onChangeText={(e) => setPassword(e)}                      // right={<TextInput.Icon icon="eye" />}
                    />
                  </View>
                  <View>
                    <TextInput
                      label="Confirm Password"
                      secureTextEntry
                      onChangeText={(e) => setConfirmPassword(e)}
                    // right={<TextInput.Icon icon="eye" />}
                    />
                  </View>
                  <View>
                    <Button style={styles.button} mode="contained" onPress={() => SignUpFunc()}>
                      Sign Up
                    </Button>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", width: `100%` }}>
                    <View style={{ backgroundColor: "gray", width: `40%`, height: 1, display: "flex", }}></View>
                    <View style={{ display: "flex" }}>
                      <Text style={{ display: "flex", margin: 10 }}>
                        or
                      </Text>
                    </View>
                    <View style={{ backgroundColor: "gray", width: `40%`, height: 1, display: "flex", }}></View>
                  </View>
                  <View style={{ display: "flex", flexDirection: 'row', justifyContent: "center" }}>
                    <View style={{ margin: 10, }}>
                      {/* <Image source={require("./Assessts/Google.png")} style={{ width: 40, height: 40 }} onPress={() => GoogleSignIn()} /> */}
                      <Button onPress={() => GoogleSignIn()}>
                        Google Login
                      </Button>
                    </View>
                    <View style={{ margin: 10, }}>
                      <Image source={require("./Assessts/Facebook.png")} style={{ width: 40, height: 40 }} />
                    </View>
                    <View style={{ margin: 10, }}>
                      <Image source={require("./Assessts/apple.png")} style={{ width: 40, height: 40 }} />
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', margin: 20, justifyContent: "center" }}>
                    <Text>
                      Already have an account?
                    </Text>
                    <Text style={{ fontWeight: 500, color: "black", marginLeft: 10, }} onPress={() => setSignUp(false)}>

                      Sign In
                    </Text>
                  </View>
                </View>
              </View>

            </>
            : <View style={styles.loginPage}>
              <Text style={{
                fontWeight: `bold`,
                margin: 15,
                textAlign: "center",
                fontSize: 20,
                color: "black"
              }}>
                Welcome Back !
              </Text>
              <View style={{ marginBottom: 30 }}>
                <TextInput
                  label="Email"
                  onChangeText={(text) => setEmail(text)}
                // secureTextEntry
                // right={<TextInput.Icon icon="eye" />}
                />
              </View>
              <View>
                <TextInput
                  label="Password"
                  secureTextEntry
                  value={Password}
                  onChangeText={(text) => setPassword(text)}
                // right={<TextInput.Icon icon="eye" />}
                />
              </View>
              <View>
                <Text style={{ textAlign: "right", margin: 15 }}>
                  Forgot Password ?
                </Text>
              </View>
              <View>
                <Button mode='contained' style={styles.button} onPress={() => console.log(Password, Email)}>
                  Sign In
                </Button>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", width: `100%` }}>
                <View style={{ backgroundColor: "gray", width: `40%`, height: 1, display: "flex", }}></View>
                <View style={{ display: "flex" }}>
                  <Text style={{ display: "flex", margin: 10 }}>
                    or
                  </Text>
                </View>
                <View style={{ backgroundColor: "gray", width: `40%`, height: 1, display: "flex", }}></View>
              </View>


              <View style={{ display: "flex", flexDirection: 'row', justifyContent: "center" }}>
                <View style={{ margin: 10, }}>
                  <Image source={require("./Assessts/Google.png")} style={{ width: 40, height: 40 }} />
                </View>
                <View style={{ margin: 10, }}>
                  <Image source={require("./Assessts/Facebook.png")} style={{ width: 40, height: 40 }} />
                </View>
                <View style={{ margin: 10, }}>
                  <Image source={require("./Assessts/apple.png")} style={{ width: 40, height: 40 }} />
                </View>
              </View>

              <View style={{ flexDirection: 'row', margin: 20, justifyContent: "center" }}>
                <Text>
                  Don't have account
                </Text>
                <Text style={{ fontWeight: 500, color: "black", marginLeft: 10, }} onPress={() => setSignUp(true)}>
                  Sign Up
                </Text>
              </View>
            </View> :
          <View>

            <View style={{
              width: `100%`,
              border: `1px solid red`,
              position: `absolute`,
              top: 250,
              // top: `20px`,
              left: -180,
              right: 0,
              padding: 20
            }}>

              <Button style={styles.button} mode="contained" onPress={() => setLoginPage(true)}>
                Get Started
              </Button>
            </View>
          </View>
        }
      </View>
    </SafeAreaView>
  );
}

export default App;


const styles = StyleSheet.create({
  // fill: { flex: 1 },
  body: {
    backgroundColor: "#0F0F0F",
    // backgroundColor: "red",
    height: `100%`,
    // flex: 1
    display: "flex",
    alignItems: 'center',
    justifyContent: "center",
    position: "relative",
    // flex: 1


  },
  text: {
    color: "white"
  },
  button: {
    backgroundColor: "#0065EB",
    padding: 2,
    // margin: 2,
    marginTop: 30
    // left: `-50px`,
    // right: `auto`
  },
  logo: {

  }, mainPage: {},
  loginPage: {
    width: `100%`,

    backgroundColor: "white",
    padding: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    position: "absolute",
    bottom: 0,
    // height: 100

  }
})

