import { View, Text, TouchableOpacity, Image } from 'react-native'
import Currency from 'react-currency-formatter'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'

const Dish = ({
    id,
    name,
    description,
    price,
    image,
}) => {

    const [isPressed, setIsPressed] = useState(false)

  return (
    <>
    <TouchableOpacity
        className={`bg-white border p-4 border-gray-200 ${isPressed && `border-b-0`}`}
        onPress={() => setIsPressed(!isPressed)}
     >

    <View className="flex-row">
        <View className="flex-1">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
                <Currency quantity={price} currency="MYR"/>
            </Text>
        </View>

        <View>
            <Image 
                source={{
                    uri: urlFor(image).url()
                }}
                className="h-20 w-20 bg-gray-300 p-4"
                style={{
                    borderWidth: 1,
                    borderColor: '#F3F3F4'
                }}
            />
        </View>
    </View>
    </TouchableOpacity>

    { isPressed && (
        <View className="bg-white px-4">
            <View className="flex-row items-center space-x-2 pb-3">
                <TouchableOpacity>
                    <MinusCircleIcon size={40} color="#00CCBB"/>
                </TouchableOpacity>

                <Text>0</Text>

                <TouchableOpacity>
                    <PlusCircleIcon size={40} color="#00CCBB"/>
                </TouchableOpacity>

            </View>
        </View>
    )}
    </>
  )
}

export default Dish