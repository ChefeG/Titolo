export type Description = {
    title: string
    brand: string
    price: number
    article: string
    buttonSize:string
    buttonAdd:string
    link:string
    sizes:number[]
}

export type ImagesSrc = {
    link:string
}

export const Descriptions: Description = {
    title:'New Balance Warped Runner',
    brand: 'New Balance',
    price: 159.90,
    article: 'Article no. UWRPDTBC',
    buttonSize: 'Size',
    buttonAdd:'Add to Cart',
    link: 'Check in-store availability',
    sizes: [40,40.5,41,41.5,42,42.5,43,43.5,44,44.5,45]
}

export const Images: ImagesSrc[] = [
    {link:'../../../../Shared/assets/BlockInfo/dd1391-103-1.jpg'},
    {link:'../../../../Shared/assets/BlockInfo/dd1391-103-2.jpg'},
    {link:'../../../../Shared/assets/BlockInfo/dd1391-103-1.jpg'},
    {link:'../../../../Shared/assets/BlockInfo/dd1391-103-2.jpg'},
    {link:'../../../../Shared/assets/BlockInfo/dd1391-103-1.jpg'},
]