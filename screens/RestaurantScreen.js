import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity'
import Dish from '../components/Dish'
import { 
    ArrowLeftIcon, 
    ChevronRightIcon, 
    MapPinIcon, 
    StarIcon ,
    QuestionMarkCircleIcon
} from 'react-native-heroicons/solid'
import BasketIcon from '../components/BasketIcon'

const RestaurantScreen = () => {

    const navigation = useNavigation()
    const {
        params: {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat,
        }
    } = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    // console.log(dishes);

  return (
    <>
    <BasketIcon />

    <SafeAreaView>
        <ScrollView>
            <View className="relative">
                <Image 
                source={{
                    uri: urlFor(imgUrl).url()
                }}
                className="w-full h-56 bg-gray-300 p-4"
                
                />
                <TouchableOpacity 
                    className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
                    onPress={navigation.goBack}
                >
                    <ArrowLeftIcon size={20} color="#00CCBB" />
                </TouchableOpacity>
            </View>

            <View className="bg-white px-4 pt-4">
                <View>
                    <Text className="text-3xl font-bold">{title}</Text>
                </View>

                <View className="flex-row space-x-2 my-1">
                    <View className="flex-row items-center space-x-1">
                        <StarIcon size={20} color='green' opacity={0.25}/>
                        <Text className="text-xs text-gray-500">
                            <Text className="text-green-500">{rating}</Text> . {genre}
                        </Text>
                    </View>

                    <View className="flex-row items-center space-x-1">
                        <MapPinIcon size={20} color='gray' opacity={0.4}/>
                        <Text className="text-xs text-gray-500">Nearby . {address}</Text>
                    </View>
                </View>

                <Text className="text-gray-500 mt-2 pb-4">
                    {short_description}
                </Text>

                <TouchableOpacity className="flex-row items-center space-x-2 border-y p-4 border-gray-300">
                    <QuestionMarkCircleIcon size={20} color='gray' opacity={0.4} />

                    <Text className="pl-2 flex-1 text-md font-bold">
                        Have a food allergy?
                    </Text>
                    <ChevronRightIcon size={20} color="#00CCBB" opacity={0.4} />
                </TouchableOpacity>
            </View>

                <View className="pb-36">
                    <Text className="px-4 pt-6 mb-3 font-bold text-xl">
                        Menu
                    </Text>

                    {/* Dishes */}
                    {dishes.map(dish => (
                        <Dish
                            key={dish._id}
                            id={dish._id}
                            name={dish.name}
                            description={dish.short_description}
                            price={dish.price}
                            image={dish.image}
                        />
                    ))}
                    {/* End Dishes */}
                </View>

        </ScrollView>
    </SafeAreaView>
    </>
  )
}

export default RestaurantScreen