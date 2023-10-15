import React, { useEffect, useState } from 'react';
import {

    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image
} from 'react-native';

import { Button, TextInput } from 'react-native-paper';

function Login() {
    return (
        <View style={styles.loginPage}>
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
                    <Image source={require("../../Assessts/Google.png")} style={{ width: 40, height: 40 }} />
                </View>
                <View style={{ margin: 10, }}>
                    <Image source={require("../../Assessts/Facebook.png")} style={{ width: 40, height: 40 }} />
                </View>
                <View style={{ margin: 10, }}>
                    <Image source={require("../../Assessts/apple.png")} style={{ width: 40, height: 40 }} />
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
        </View>
    )
}

export default Login



const styles = StyleSheet.create({
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
        padding: 2
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