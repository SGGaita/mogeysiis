import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator,
  Platform
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { icons, COLORS, SIZES, FONTS, routes } from '../../constants'


export const Login = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = () => {
    // handle submission logic here
    navigation.navigate('Home')
  };


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <View style={styles.header}>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, right: 10, alignItems: 'flex-end', justifyContent: 'center' }}>
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.INFORMATION)}
            >
              <Image
                source={icons.info}
                resizeMode="contain"
                style={{
                  width: 20,
                  tintColor: COLORS.black,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

      </View>
      <View style={styles.content}>
        <Text style={styles.prompt}>Proceed with your</Text>
        <Text style={styles.title}>Login</Text>
        {/**Phone number */}

        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={{ textAlign: "left", color: COLORS.black, ...FONTS.body2 }}>
            Enter your mobile number
          </Text>
          <TextInput
            style={{
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.blue,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.black,
              ...FONTS.body3,
              fontWeight: "700"
            }}
            type="tel"
            autoFocus={true}
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.black}
            value={phoneNumber}
            keyboardType="phone-pad"
            placeholder="xxx-xxx-xxx"
          />

          <LinearGradient colors={[COLORS.lightpurple, COLORS.purple]} style={styles.linearGradient}>
            <TouchableOpacity
              style={{
                height: 60,

                borderRadius: SIZES.radius / 1.5,
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onPress={handleSubmit}

            >

              <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Continue</Text>

            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,

  },
  content: {
    flex: 11,
    flexDirection: "column",
    justifyContent: 'center',
    marginTop: SIZES.padding * 23,
    marginHorizontal: SIZES.padding * 1,
  },
  prompt: {
    fontSize: 30,
    fontWeight: '300',
    color: COLORS.black
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 80,
    color: COLORS.black
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    width: '100%',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});