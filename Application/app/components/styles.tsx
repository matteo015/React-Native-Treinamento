import { Text, View, StyleSheet, Dimensions} from "react-native";

export default StyleSheet.create({
  default_font: {
      color: "#111111",
      fontWeight: 'bold',
      fontSize: 20
  },
  body_container: {
      flex: 1,
      flexGrow: 1,
      gap: 10,
      flexDirection: 'column',
      backgroundColor: '#F9F9F9',
      width: '100%',
      height: '100%',
      marginVertical: 5,
  },

  opt_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', 
    gap: 5,
    maxWidth: Dimensions.get('window').width ,
    maxHeight: 155
  }, 

  opt_item_container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 75,
    minWidth: 75,
    maxWidth: 90,
    maxHeight: 90,
    backgroundColor: '#EEEEEE',
    borderRadius: 8,
  },

  opt_item_content: {
    color: '#111111',
    fontWeight: 600,
    fontSize: 10,
    padding: 3
  },

  opt_item_img:{
    height: 40,
    width: 40
  },

  banners_container:{
    width: '100%', 
    height: 100,
    paddingLeft: 16,
    overflow: 'hidden'
  },

  banner_item_container:{
    width: 200,
    height: 100,
  
    backgroundColor: '#ff3333',
    borderRadius: 8,
  },

  banner_item_img:{
    width: 200,
    height: 100,
    borderRadius: 8,
  },

  promotions_tab:{
    paddingLeft: 16,
    gap: 8,
    flexDirection: 'column',
    overflow: 'hidden'
  },

  promo_item_container:{
    flexDirection: 'row',
    gap: 5,
  },

  promo_item_img:{
    width: 75,
    height: 60,
    borderRadius: 8,
  },

  promo_item_info_container:{
    flexDirection: 'column',
  },

  promo_restaurants_container:{
    flexDirection: 'column',
    width: '100%',
    height: 108,
    paddingLeft: 16,
    gap: 8,
  },

  promo_restaurant_img_container: {
    borderRadius: '50%',
    width: 60,
    height: 60,
  },
});


export const navbar = StyleSheet.create({
    nav_bar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      bottom: 0,
      left: 0,
      right: 0,
      position: 'absolute',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -1 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      zIndex: 999,
      height: 50,
      backgroundColor: '#F9F9F9',
    },

    nav_option: {
      padding: 5,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column', 
    },

    nav_option_img: {
      width: 17,
      height: 17,
    }
})

export const header = StyleSheet.create({
    header_bar: {
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    centerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      maxWidth: '80%',
      justifyContent: 'center',
    },
    addressText: {
      fontSize: 16,
      fontWeight: '600',
      maxWidth: 200,
    },
    chevron: {
      width: 10,
      height: 10,
      marginLeft: 2,
      marginTop: 7,
    },
    bellContainer: {
      position: 'absolute',
      right: 16,
      top: 5,
      padding: 5,
    },
    bellIcon: {
      width: 20,
      height: 20,
    },
});