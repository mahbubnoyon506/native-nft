import { View, Text } from 'react-native'
import React from 'react'
import { assets, SIZES } from '../constants'
import { Image } from 'react-native'

export const NFTTitle = () => {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  )
}
export const EthPrice = () => {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  )
}
export const ImageCmp = ({imgUrl, index}) => {
  return (
    <Image 
    source={imgUrl}
    resizeMode='contain'
    style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font
    }}
    />
  )
}
export const People = () => {
  return (
    <View style={{
        flexDirection:'row'
        }}>
            {[assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
                <ImageCmp imgUrl={imgUrl} index={index} />
            ))}
    </View>
  )
}
export const EndDate = () => {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  )
}
export const SubInfo = () => {
  return (
    <View style={{
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }}>
     <People />
     <EndDate />
    </View>
  )
}
