const PRODUCTS = [
    {
        id: 100,
        name: 'Iphone 14 Pro Max',
        price: 69900,
        image: require('../assets/products/iphone14.png'),
        description: "The iPhone 14 clocks in at 6.1 inches, but both phones feature Apple's Super Retina XDR OLED display with a peak HDR brightness of 1200 nits. The iPhone 14 sticks with a 60Hz display and here's why we think that is ridiculous. Both feature Ceramic Shield on the front glass for added durability."
    },
    {
        id: 101,
        name: 'Apple Macbook Air M2',
        price: 120000,
        image: require('../assets/products/macbookm2.jpg'),
        description: 'Apple MacBook Air 2020 is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels. It is powered by a Core i3 processor and it comes with 8GB of RAM. The Apple MacBook Air 2022 packs 256GB of SSD storage. Graphics are powered by Integrated Graphics Processor.'
    },
    {
        id: 102,
        name: 'Apple iPad Air 5',
        price: 35600,
        image: require('../assets/products/ipadair2022.jpg'),
        description: 'The device is built with a glass front, aluminum back, and aluminum frame. The tablet features True-tone and Wide color gamut on the display while the size of the screen is 10.9 inches Liquid Retina IPS LCD capacitive touchscreen. It is protected by Scratch-resistant glass and oleophobic coating.'
    }
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}