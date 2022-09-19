import { View, Text } from 'react-native'
import React from 'react'

const Dish = ({
    id,
    name,
    description,
    price,
    image,
}) => {



  return (


    <View>
      <Text>{name}</Text>
    </View>
  )
}

export default Dish