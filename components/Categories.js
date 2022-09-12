import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
        }}
    >
        {/* Category Card */}
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 1'/>
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 2'/>
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 3'/>
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 4'/>
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 5'/>
        {/* End Category Card */}
    </ScrollView>
  ) 
}

export default Categories