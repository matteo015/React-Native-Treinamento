import {Text, TouchableOpacity} from "react-native";
import styles from "./styles";

export default function Menu(props:any){
    return(
        <TouchableOpacity>
            <Text style={styles.default_font}>
                {props.menu}
            </Text>
        </TouchableOpacity>
    )
}