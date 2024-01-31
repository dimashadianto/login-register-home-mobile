import React from 'react';
import { View, FlatList, Image, Text, ScrollView, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../utils/Colors';

// Import your images
import image1 from './../../../assets/slider/1.jpg';
import image2 from './../../../assets/slider/2.jpg';
import image3 from './../../../assets/slider/3.jpg';

export default function Slider() {
    const data = [
        {
            title: "Product 1",
            image: image1
        },
        {
            title: "Product 2",
            image: image2
        },
        {
            title: "Product 3",
            image: image3
        },
        {
            title: "Product 4",
            image: image1
        },
        {
            title: "Product 5",
            image: image2
        },
        {
            title: "Product 6",
            image: image3
        },
    ];

    return (
        <View>
            <View>
                <FlatList
                    data={data}
                    horizontal={true}
                    contentContainerStyle={{ gap: 6, paddingHorizontal: 12 }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <View
                                style={{
                                    flex: 1,
                                    width: 260,
                                    height: 180,
                                }}>
                                <Image
                                    source={item.image}
                                    style={{ width: '100%', height: '100%', borderRadius: 10 }}
                                />
                            </View>
                        );
                    }}
                />
            </View>
        </View>
    );
}
