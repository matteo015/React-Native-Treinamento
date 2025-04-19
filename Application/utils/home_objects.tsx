export type Categorie = {
    id: number,
    name: string,
    img_url: string,
}
export type Banner = {
    id: number,
    name: string,
    img_url:string,
}

export type PromoItem = {
    id: number,
    name: string,
    img_url: string,
    price: number,
    price_wdiscount: number,
}

export type Restaurant = {
    id: number,
    name: string,
    icon: string,
}

export type NavItem = {
    id: number,
    name: string,
    icon: string,
}

export const categories: Categorie[] = [
    { id: 1, name: "Restaurantes", img_url: require("@/assets/images/icons/home/catalog/ico_restaurante.png") },
    { id: 2, name: "Mercados", img_url: require("@/assets/images/icons/home/catalog/ico_mercado.png") },
    { id: 3, name: "Clube Ifood", img_url: require("@/assets/images/icons/home/catalog/ico_clube_ifood.png") },
    { id: 4, name: "Farmácias", img_url: require("@/assets/images/icons/home/catalog/ico_farmacia.png") },
    { id: 5, name: "Pet Shops", img_url: require("@/assets/images/icons/home/catalog/ico_pet_shop.png") },
    { id: 6, name: "Express", img_url: require("@/assets/images/icons/home/catalog/ico_express.png") },
    { id: 7, name: "Bebidas", img_url: require("@/assets/images/icons/home/catalog/ico_bebidas.png") },
    { id: 8, name: "Shopping", img_url: require("@/assets/images/icons/home/catalog/ico_shopping.png") },
];

export const banners: Banner[] = [
    { id: 1, name: "promo_noodles", img_url: require("@/assets/images/banners/banner_1.png") },
    { id: 2, name: "promo_noodles", img_url: require("@/assets/images/banners/banner_1.png") },
    { id: 3, name: "promo_noodles", img_url: require("@/assets/images/banners/banner_1.png") },
    { id: 4, name: "promo_noodles", img_url: require("@/assets/images/banners/banner_1.png") },
    { id: 5, name: "promo_noodles", img_url: require("@/assets/images/banners/banner_1.png") },
    { id: 6, name: "promo_noodles", img_url: require("@/assets/images/banners/banner_1.png") },
    { id: 7, name: "promo_noodles", img_url: require("@/assets/images/banners/banner_1.png") },
    { id: 8, name: "promo_noodles", img_url: require("@/assets/images/banners/banner_1.png") },
];

export const promo_items: PromoItem[] = [
    { id: 1, name: "50 uni Mini salgados", img_url: require("@/assets/images/icons/promo_item_1.jpg"), price: 39.99, price_wdiscount: 12.99 },
    { id: 2, name: "100 uni Mini salgados", img_url: require("@/assets/images/icons/promo_item_2.jpg"), price: 20.99, price_wdiscount: 68.99 },
    { id: 3, name: "X Burguer", img_url: require("@/assets/images/icons/promo_item_3.jpg"), price: 20.99, price_wdiscount: 5.99 },
    { id: 4, name: "X Bacon Duplo", img_url: require("@/assets/images/icons/promo_item_4.jpg"), price: 25.99, price_wdiscount: 13.47 },
];

export const restaurants: Restaurant[] = [
    { id: 2, name: "Burguer King", icon: require("@/assets/images/icons/home/restaurant/icon_1.png")},
    { id: 3, name: "Mac Donalds", icon: require("@/assets/images/icons/home/restaurant/icon_2.png")},
    { id: 4, name: "Starbucks", icon: require("@/assets/images/icons/home/restaurant/icon_3.png")},
    { id: 5, name: "Subway", icon: require("@/assets/images/icons/home/restaurant/icon_4.png")},
    { id: 1, name: "KFC", icon: require("@/assets/images/icons/home/restaurant/icon_5.png")},
];

export const home_nav_items: NavItem[] = [
    { id: 1, name: "Início", icon: require("@/assets/images/icons/home/navbar/icon_1.png")},
    { id: 2, name: "Busca", icon: require("@/assets/images/icons/home/navbar/icon_2.png")},
    { id: 3, name: "Loja Ifood", icon: require("@/assets/images/icons/home/navbar/icon_3.png")},
    { id: 4, name: "Pedidos", icon: require("@/assets/images/icons/home/navbar/icon_4.png")},
    { id: 5, name: "Perfil", icon: require("@/assets/images/icons/home/navbar/icon_5.png")},
]