import { View, FlatList, Image, Text, ScrollView } from 'react-native';
import React from 'react'

// Import your images
import image1 from './../../../assets/slider/1.jpg';
import image2 from './../../../assets/slider/2.jpg';
import image3 from './../../../assets/slider/3.jpg';
import Colors from '../../utils/Colors';

export default function Slider() {
    const data = [
        {
            title: "Product 1",
            image: image1,
            price: "Rp. 12.000"
        },
        {
            title: "Product 2",
            image: image2,
            price: "Rp. 12.000"
        },
        {
            title: "Product 3",
            image: image3,
            price: "Rp. 12.000"
        },
        {
            title: "Product 4",
            image: image1,
            price: "Rp. 12.000"
        },
        {
            title: "Product 5",
            image: image2,
            price: "Rp. 12.000"
        },
        {
            title: "Product 6",
            image: image3,
            price: "Rp. 12.000"
        },
        {
            title: "Product 7",
            image: image3,
            price: "Rp. 12.000"
        },
        {
            title: "Product 8",
            image: image3,
            price: "Rp. 12.000"
        },
    ];
    return (
        <View style={{ paddingTop: 30 }}>
            <Text style={{ color: Colors.PRIMARY, fontSize: 20, fontWeight: '600', paddingLeft: 12, paddingBottom: 15 }}>New Product</Text>
            <View>
                <FlatList
                    data={data}
                    numColumns={2}
                    columnWrapperStyle={{ gap: 10, paddingHorizontal: 12, paddingVertical: 14 }}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <View
                                style={{
                                    flex: 1,
                                    height: 200,
                                    borderRadius: 20,
                                    backgroundColor: Colors.PRIMARY,
                                    paddingBottom: 30,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 5,
                                }}>
                                <Image
                                    source={item.image}
                                    style={{ width: '100%', height: '100%', borderRadius: 10 }}
                                />
                                <Text style={{ color: Colors.WHITE, marginTop: 5, fontWeight: '600' }}>{item.title}</Text>
                                <Text style={{ color: Colors.WHITE }}>{item.price}</Text>
                            </View>
                        );
                    }}
                />
            </View>
        </View>
    )
}