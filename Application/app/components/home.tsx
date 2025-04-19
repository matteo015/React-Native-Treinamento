import {FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, View, Text} from "react-native";
import styles from "./styles";

import {BannerTab, PromotionsTab, RestaurantTab, HeaderTab, NavBar, Catalog} from "./menu"
import {categories, banners, promo_items, restaurants} from "@/utils/home_objects"

const addres : string = "Av. Liberdade, 855"

export default function Home(){
    return(
        <View style={{flex: 1}}>
            <ScrollView
                style={{marginBottom: 55}}
                contentContainerStyle={styles.body_container}
                showsVerticalScrollIndicator={false}
                >
                <HeaderTab addres={addres}/>
                <Catalog/>
                <BannerTab data={banners}/>
                <PromotionsTab data={promo_items}/>
                <RestaurantTab data={restaurants}/>
                <BannerTab data={banners}/>
            </ScrollView>
            <NavBar/>
        </View>
    )
}