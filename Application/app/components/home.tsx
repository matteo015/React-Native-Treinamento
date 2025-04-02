import {FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import Menu from "./menu";
import styles from "./styles";
import Card from "./card";
import PrimeLogo from "@/assets/images/prime_video.png"
import AmazonLogo from "@/assets/images/amazon_logo.png"

import { MOVIESCRIME } from "@/utils/enum_movies";
export default function Home(){
    return(
        <View style={styles.header_container}>
            <View style={styles.header}>
                <Image source={PrimeLogo}></Image>
                <Image source={AmazonLogo} style={styles.amazon_logo}></Image>
            </View>
            <View style={styles.nav_bar}>
                <Menu menu="Home"/>
                <Menu menu="TV Show"/>
                <Menu menu="Movies"/>
                <Menu menu="Kids"/>
            </View>
            <ScrollView>
                <TouchableOpacity style={styles.nav_image}>
                </TouchableOpacity>
                <Menu menu="Continue Watching"/>
                <Menu menu="Crime Movies"/>
                <Menu menu="Watch in your language"/>
                <FlatList
                        data={MOVIESCRIME}
                        keyExtractor={(item:any) => item.id}
                        renderItem={({item}) => (
                            <Card
                                imageUrl={item.img_url}
                            />
                        )}
                    />
            </ScrollView>
        </View>
    )
}