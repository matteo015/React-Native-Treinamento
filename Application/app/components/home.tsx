import {Image, ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import Menu from "./menu";
import styles from "./styles";

import PrimeLogo from "@/assets/images/prime_video.png"
import AmazonLogo from "@/assets/images/amazon_logo.png"

import Movie1 from "@/assets/movies/american.png"
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
                <TouchableOpacity>
                    <Image source={Movie1}></Image>
                </TouchableOpacity>
                <Menu menu="Continue Watching"/>
                <Menu menu="Crime Movies"/>
                <Menu menu="Watch in your language"/>
            </ScrollView>
        </View>
    )
}