import {Image, TouchableOpacity } from "react-native"

export default function Card (props:any) {
    return (
        <TouchableOpacity>
            <Image source={props}/>
        </TouchableOpacity>
    )
}