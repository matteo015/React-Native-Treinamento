import {Text, TouchableOpacity, View, Image, FlatList} from "react-native";
import {Banner, Categorie, PromoItem, Restaurant} from "@/utils/home_objects"
import {home_nav_items, categories} from "@/utils/home_objects"

import {to_columnstore} from "@/utils/functions/columnstore_flatlist"
import styles, { header , navbar} from "./styles";


export function TabHeader(props:any){
    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 16}}>
            <Text>{props.title}</Text>
            <TouchableOpacity>
                <Text style={{color: 'red'}}>Ver mais</Text>
            </TouchableOpacity>
        </View>
    )
}

export function NavBar(){
    return(
        <View style ={{position: 'relative', flex: 1}}>
            <View style={navbar.nav_bar}>
                {home_nav_items.map((item) => (<NavItem name={item.name} icon={item.icon}/>))}
            </View>
        </View>
    );
}
export function OptionCard(props:any){
    return(
        <TouchableOpacity>
            <View style={styles.opt_item_container}>
                <Image source={props.img_src} style={styles.opt_item_img}/>
                <Text style={styles.opt_item_content}>{props.opt}</Text>
            </View>
        </TouchableOpacity>
    )
}

export function BannerCard(props:any){
    return(
        <TouchableOpacity style={styles.banner_item_container}>
            <View><Image source={props.img_src} style={styles.banner_item_img}/></View>
        </TouchableOpacity>
    )
}

export function ItemCard(props:any){
    return(
        <TouchableOpacity>
            <View style={styles.promo_item_container}>
                <Image source={props.img_src} style={styles.promo_item_img}/>
                <View style={styles.promo_item_info_container}>
                    <Text>{props.name}</Text>
                    {/*Informações do preço*/}
                    <View style={{flexDirection: 'row'}}>

                        <Text style={{color: 'green'}}>R$ {props.price_wdiscount} </Text>
                        
                        <Text style={{color: 'gray', textDecorationLine: 'line-through', lineHeight: 16.5}}>
                            R$ {props.price}
                        </Text>

                    </View>
                    {/*Informações de entrega*/}
                    <View style={{flexDirection: 'row'}}>
                        <Text></Text>
                        <Text></Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export function NavItem(props: any){
    return (
        <TouchableOpacity>
            <View style={navbar.nav_option}>
                <Image source={props.icon} style={navbar.nav_option_img}/>
                <Text>{props.name}</Text>    
            </View>   
        </TouchableOpacity>
    );
}

export function HeaderTab(props: any) {
    return (
      <View style={header.header_bar}>
        <View style={header.centerContainer}>
          <Text style={header.addressText} numberOfLines={1}>{props.addres}</Text>
          <Image
            source={require("@/assets/images/icons/home/header/chevron.png")}
            style={header.chevron}
          />
        </View>
        <TouchableOpacity style={header.bellContainer}>
          <Image
            source={require("@/assets/images/icons/home/header/bell.png")}
            style={header.bellIcon}
          />
        </TouchableOpacity>
      </View>
    );
}

export function Catalog(){
    return(
        <View style={styles.opt_container}>
            {categories.map((item) => (<OptionCard key={item.id} opt={item.name} img_src={item.img_url} />))}
        </View>
    );
}

export function BannerTab({data}: { data: Banner[] }){
    return (
        <View style={styles.banners_container}>
            <FlatList
                data={data}
                keyExtractor={(item:any) => item.id}
                renderItem={({item}) => (
                <BannerCard img_src={item.img_url}/>
                )}
                horizontal={true}
                contentContainerStyle={{
                paddingRight: 14,
                gap: 5,
                }}
                showsHorizontalScrollIndicator={false}
                />
        </View>
    )
}

export function RestaurantTab({data}: {data: Restaurant[]}){
    return (
        <View style={styles.promo_restaurants_container}>
            <TabHeader title={"Cupom e entrega grátis"}/>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingRight: 16}}>
                {
                    data.map((item) => (
                        <TouchableOpacity>      
                            <Image source={item.icon} style={styles.promo_restaurant_img_container}/>
                        </TouchableOpacity>
                        )
                    )
                }
            </View>
        </View>
    )
}

export function PromotionsTab({data}: { data: PromoItem[]}){
    return (
        <View style={styles.promotions_tab}>
            <TabHeader title="Promoções com entregas gratis"/>
            <FlatList
                data={to_columnstore(data)}
                keyExtractor={(_, index) => `column-${index}`}
                horizontal={true}
                renderItem={({ item }) => (
                <View style={{ flexDirection: 'column', gap: 5 }}>
                    {item.map((promo: any) => (
                        <ItemCard
                            key={promo.id}
                            name={promo.name}
                            price={promo.price}
                            price_wdiscount={promo.price_wdiscount}
                            img_src={promo.img_url}
                        />
                    ))}
                </View>
                )}
                contentContainerStyle={{
                    gap: 10,
                }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}