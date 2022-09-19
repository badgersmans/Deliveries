import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import sanityClient from '../sanity';
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description}) => {

  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    sanityClient.fetch(
        `
        * [_type == 'featured' && _id == $id] {
        ...,
        restaurants[] -> {
          ...,
          dishes[]->,
          type-> {
            name
          }
        },
      }[0]
        `, 
        { id }
        ).then((data) => {
          // console.log(data)
            setRestaurants(data?.restaurants);
        });
}, [id]);

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
        {restaurants?.map(restaurant => (
          <RestaurantCard 
              key={restaurant._id}
              id={restaurant._id}
              imgUrl={restaurant.image}
              title={restaurant.name}
              rating={restaurant.rating}
              genre={restaurant.type?.name}
              address={restaurant.address}
              short_description={restaurant.short_description}
              dishes={restaurant.dishes}
              long={restaurant.long}
              lat={restaurant.lat}
          /> 
        ))}
        {/* End Restaurant cards */}
      </ScrollView>
    </View>
  )
}

export default FeaturedRow