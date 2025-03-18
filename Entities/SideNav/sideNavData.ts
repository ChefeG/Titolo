type language = {
    language: string;
    link: string;
}

type SubItems = {
    title: string;
    link: string;
}

type navigation = {
    title: string;
    subItems: SubItems[];
    link: string;
}

export const languages: language[] = [
    {language: 'EN', link: '#'}, {language: 'RU', link: '#'}, 
    {language: 'DE', link: '#'}, {language: 'FR', link: '#'}
]

export const Navigations: navigation[] = [
    {title: 'Men', link: '', subItems: [
        { title: "Sneakers", link: "/men/sneakers" },
        { title: "Apparel", link: "/men/apparel" },
        { title: "Accessories", link: "/men/accessories" },]}, 
    {title: 'Women', link: '' , subItems: [
        { title: "Sneakers", link: "/women/sneakers" },
        { title: "Apparel", link: "/women/apparel" },
        { title: "Accessories", link: "/women/accessories" },
      ],}, 
    {title: 'Kids', link: '', subItems: [
        { title: "Sneakers", link: "/kids/sneakers" },
        { title: "Apparel", link: "/kids/apparel" },
        { title: "Accessories", link: "/kids/accessories" },
      ],}, 
    {title: 'Brands', link: '', subItems: [{title:"adidas", link:"#"}],},
    {title: 'New Arrivals', link: '#', subItems:[]},
    {title: 'Coming Soon', link: '#', subItems:[]},
    {title: 'Sale', link: '#', subItems:[]},
    {title: 'Giftcards', link: '#', subItems:[]},
    {title: 'Editorial', link: '#', subItems:[]},
    {title: 'Raffles', link: '#', subItems:[]},
    {title: 'Sign In', link: '#', subItems:[]},
]