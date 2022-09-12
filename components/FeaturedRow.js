import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{ title }</Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal: 15,
        }}
        className="pt-4"
      >
        {/* Restaurant cards */}
            <RestaurantCard 
                id={1234321}
                imgUrl={"https://links.papareact.com/gn7"}
                title={'Stuffd'}
                rating={4.5}
                genre={'Mexican'}
                address={'One Utama'}
                short_description={'short desc...'}
                dishes={[]}
                long={123.56}
                la={321.23}
            /> 
            <RestaurantCard 
                id={1234321}
                imgUrl={"https://links.papareact.com/gn7"}
                title={'Stuffd'}
                rating={4.5}
                genre={'Mexican'}
                address={'One Utama'}
                short_description={'short desc...'}
                dishes={[]}
                long={123.56}
                la={321.23}
            /> 
            <RestaurantCard 
                id={1234321}
                imgUrl={"https://links.papareact.com/gn7"}
                title={'Stuffd'}
                rating={4.5}
                genre={'Mexican'}
                address={'One Utama'}
                short_description={'short desc...'}
                dishes={[]}
                long={123.56}
                la={321.23}
            /> 
        {/* End Restaurant cards */}
      </ScrollView>
    </View>
  )
}

export default FeaturedRow