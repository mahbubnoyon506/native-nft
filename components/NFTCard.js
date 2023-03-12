import { View, Text, Image } from 'react-native'
import React from 'react'
import { assets, COLORS, SHADOWS, SIZES } from '../constants'
import { CircleButton } from './Button'
import { SubInfo } from './SubInfo'

const NFTCard = ({data}) => {
  return (
    <View style={{
        backgroundColor: COLORS.white,
        borderRadius:SIZES.font,
        marginBottom:SIZES.extraLarge,
        margin:SIZES.base,
        ...SHADOWS.dark
    }}>
        <View style={{width: '100%', height: 250}}>
        <Image 
        source={data.image}
        resizeMode='cover'
        style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
        }}
        />
        </View>
      <CircleButton imgUrl={assets.heart} right={10} top={10} />
      <SubInfo />
    </View>
  )
}

export default NFTCard