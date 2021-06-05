
// Just write new one to add some product // sering-sering pake basa enggres ^^

const Products = [
    {
        id : 'XX5R9R3VKg',
        category : 'coffee',
        name : 'Cappuccino Matcha',
        price : 20000,
        discount : 20,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Cappucchino Matcha-.png'
    },
    {
        id : 'kOYdNVj0Mk',
        category : 'coffee',
        name : 'Black Coffee Hot',
        price : 20000,
        discount : 15,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Black Coffee-.png'
    },
    {
        id : 'kOYdNVj0Mk',
        category : 'coffee',
        name : 'Cappuccino Hot',
        price : 20000,
        discount : 15,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Cappuccino Hot-.png'
    },
    {
        id : 'KSmR8MVrMC',
        category : 'coffee',
        name : 'Kopi Almond',
        price : 20000,
        discount : 0,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Coklat Soya-.png'
    },
    {
        id : 'BZBQ85MCeV',
        category : 'coffee',
        name : 'Brown Sugar Latte',
        price : 20000,
        discount : 0,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Gula Aren-.png'
    },
    {
        id : 'kpIsSUllGI',
        category : 'coffee',
        name : 'Kopi Susu Lagi',
        price : 20000,
        discount : 0,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Kopi Susu-.png'
    },
    {
        id : 'LllmMTeaaa',
        category : 'non-coffe',
        name : 'Lemon Tea',
        price : 20000,
        discount : 0,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Lemon Tea-.png'
    },
    {
        id : 'MaNGGGOthh',
        category : 'non-coffe',
        name : 'Mango Tea',
        price : 20000,
        discount : 0,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Mango Tea-.png'
    },
    {
        id : 'StrbrChthh',
        category : 'non-coffe',
        name : 'Strawberry Cheese Tea',
        price : 20000,
        discount : 0,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Strawberry Cheese Tea-.png'
    },
    {
        id : 'ThaIIiThHo',
        category : 'non-coffe',
        name : 'Thaitea Hot',
        price : 20000,
        discount : 0,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Thaitea Hot-.png'
    },
    {
        id : 'ThhaIIiThh',
        category : 'non-coffe',
        name : 'Thaitea',
        price : 20000,
        discount : 0,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Thaitea-.png'
    },
    {
        id : 'ThhaiChThh',
        category : 'non-coffe',
        name : 'Thai Cheese tea',
        price : 20000,
        discount : 0,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Thaitea Cheese-.png'
    },
    {
        id : 'Stttrbrthh',
        category : 'non-coffe',
        name : 'Strawberry Tea',
        price : 20000,
        discount : 0,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Strawberry Tea-.png'
    },
    {
        id : 'MgggChssTh',
        category : 'non-coffe',
        name : 'Brown Sugar Boba',
        price : 20000,
        discount : 0,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Mango Cheese Tea-.png'
    },
    {
        id : 'BRwnSgrBba',
        category : 'non-coffe',
        name : 'Brown Sugar Boba',
        price : 20000,
        discount : 0,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Brown Sugar Boba-.png'
    },
    {
        id : 'BoBBaFrshM',
        category : 'non-coffe',
        name : 'Boba Fresh Milk',
        price : 20000,
        discount : 0,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Boba Fresh Milk-.png'
    },
    {
        id : 'KooHnMYgfR',
        category : 'non-coffe',
        name : 'Jasmine Tea',
        price : 20000,
        discount : 0,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Jasmine Tea-.png'
    },
    {
        id : 'akJLbOfsij',
        category : 'non-coffe',
        name : 'Matcha',
        price : 20000,
        discount : 0,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Matcha-.png'
    },
    {
        id : 'OORrrMlksk',
        category : 'non-coffe',
        name : 'Oreo Milkshake',
        price : 20000,
        discount : 0,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Oreo Milkshake-.png'
    },
    {
        id : 'ORrCHMlksk',
        category : 'non-coffe',
        name : 'Oreo Cheese Milkshake',
        price : 20000,
        discount : 0,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Oreo Cheese Milkshake-.png'
    },
    {
        id : 'kdoJsVeiol',
        category : 'non-coffe',
        name : 'Red Velvet',
        price : 20000,
        discount : 0,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Red Velvet-.png'
    },
    {
        id : 'yUZzFrshmk',
        category : 'non-coffe',
        name : 'Yuzu Freshmilk',
        price : 20000,
        discount : 0,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Yuzu-.png'
    },
    {
        id : 'PBTerAEYDy',
        category : 'non-coffe',
        name : 'Taro',
        price : 20000,
        discount : 0,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Taro-.png'
    },
    {
        id : 'MBPIlPppii',
        category : 'merchandise',
        name : 'glass tumblr',
        price : 50000,
        discount : 50,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Merch Botol Pink-.png'
    },
    {
        id : 'MBPnjLHve',
        category : 'merchandise',
        name : 'glass tumblr',
        price : 50000,
        discount : 50,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Merch Botol Putih-.png'
    },
    {
        id : 'jIIMboOnnN',
        category : 'merchandise',
        name : 'glass tumblr',
        price : 50000,
        discount : 50,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Merch White Glass-.png'
    },
    {
        id : 'MlhoinfLuh',
        category : 'merchandise',
        name : 'glass tumblr',
        price : 50000,
        discount : 50,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Merch Brown Glass-.png'
    },
    {
        id : 'MkbDRrotii',
        category : 'merchandise',
        name : 'glass tumblr',
        price : 50000,
        discount : 50,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Merch Galaxy-.png'
    },
    {
        id : 'kjPdolAarr',
        category : 'merchandise',
        name : 'glass tumblr',
        price : 50000,
        discount : 50,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Merch Pink-.png'
    },
    {
        id : 'MSCBoreEoo',
        category : 'merchandise',
        name : 'glass tumblr',
        price : 50000,
        discount : 50,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Merch Stoneware Canisters Black 1-.png'
    },
    {
        id : 'MSCBrGCdjkg',
        category : 'merchandise',
        name : 'glass tumblr',
        price : 50000,
        discount : 50,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Merch Stoneware Canisters Grey 1-.png'
    },
    {
        id : 'StwAajjhlo',
        category : 'merchandise',
        name : 'glass tumblr',
        price : 50000,
        discount : 50,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Merch Straw Ajah-.png'
    },
    {
        id : 'TrPcclstwW',
        category : 'merchandise',
        name : 'glass tumblr',
        price : 50000,
        discount : 50,
        detail : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        img : 'Merch Tropical Straw-.png'
    },

];

export default Products;