import { Text, View, StyleSheet} from "react-native";

export default StyleSheet.create({
  default_font: {
      color: "#FFFFFF",
      fontWeight: 'bold',
      fontSize: 20
  },

  amazon_logo: {
      left: 10,
      top: -35,
      bottom: -10
  },

  header_container: {
      flex: 1,
      backgroundColor: '#232F3E',
  },
  header: {
      width: '100%',
      paddingTop: 80,
      alignItems: 'center',
      justifyContent: 'center'
  },
  nav_bar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },

  nav_image: {
    flex: 1,
    flexDirection: 'row',
    flexShrink: 1,
  }
});