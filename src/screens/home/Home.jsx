import React from 'react'
import {
  View,
   Text,
   TextInput,
  StyleSheet,
KeyboardAvoidingView,
TouchableOpacity,
Image} from 'react-native'
import {COLORS, FONTS, SIZES, icons, routes} from '../../constants'

export const Home = ({navigation}) => {


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
