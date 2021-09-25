import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-vector-icons/Icon'

const options = [
    {
        id: '001',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'Mapscreen',
    },
    {
        id: '002',
        title: 'Order food',
        image: 'https://links.papareact.com/28w',
        screen: 'Eatscreen',
    },
]


const NavOptions = () => {
    const navigation = useNavigation();
    
    return (
        <FlatList
            data={options}
            keyExtractor={(item) => item.id}
            horizontal
            renderitem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
                    <View>
                        <Image 
                            source={{uri: item.image}}
                            style={{ width: 120, height: 120, resizeMode: 'container'}}
                        />
                        <Text>{item.title}</Text>
                        <Icon
                            name='arrowright' 
                            color='white' 
                            type='antdesign'

                        />
                    </View>    
                        
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions

const styles = StyleSheet.create({})
