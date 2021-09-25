import React from 'react'
import { StyleSheet, Image, View, Text, SafeAreaView } from 'react-native'
import NavOptions from '../components/NavOptions'

const Homescreen = () => {
    return (
        <SafeAreaView style={}>
            <View>
                <Image 
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain"
                    }}
                    source={{
                        
                        uri: "https://links.papareact.com/gzs"
                    }}
                />
            </View>
            <NavOptions />
        </SafeAreaView>
    )
}

export default Homescreen

const styles = StyleSheet.create({

})
