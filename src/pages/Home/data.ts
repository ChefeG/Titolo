import image1_1 from '../../assets/BlockInfo/dd1391-103-1.jpg';
import image1_2 from '../../assets/BlockInfo/dd1391-103-2.jpg';
import image2_1 from '../../assets/BlockInfo/dm0211-100-1.jpg'
import image2_2 from '../../assets/BlockInfo/dm0211-100-2.jpg'
import image4_1 from '../../assets/BlockInfo/fb9660-003-1.jpg'
import image4_2 from '../../assets/BlockInfo/fb9660-003-2.jpg'
import image5_1 from '../../assets/BlockInfo/fb9933-100-1.jpg'
import image5_2 from '../../assets/BlockInfo/fb9933-100-2.jpg'
import image6_1 from '../../assets/BlockInfo/fv5029-141-1.jpg'
import image6_2 from '../../assets/BlockInfo/fv5029-141-2.jpg'
import image7_1 from '../../assets/BlockInfo/fz4133-640-1.jpg'
import image7_2 from '../../assets/BlockInfo/fz4133-640-2.jpg'
import image8_1 from '../../assets/BlockInfo/m2002rst-1.jpg'
import image8_2 from '../../assets/BlockInfo/m2002rst-2.jpg'
import imageInfo_1 from '../../assets/BlockProducts/1203A388-101_08.jpg'
import imageInfo_2 from '../../assets/BlockProducts/JF2581_03.jpg'
import imageInfo_3 from '../../assets/BlockProducts/JR1206_06.jpg'
import imageInfo_1_1 from '../../assets/BlockInfo_2/Titolo_Z_rich_1.jpg'
import imageInfo_1_2 from '../../assets/BlockInfo_2/Unbenannt-1.jpg'



type dataBlockProduct = {
    id: number;
    image1: string;
    image2:string;
    title: string;
    brand: string;
    prevPrice: string;
    finalPrice: string;
}
type titleBlockProduct = {
    id:number;
    mainTitle: string;
    secondTitle: string;
    buttonTitle: string;
}

type titleBlockInfo = {
    id: number;
    mainTitle: string;
    secondTitle: string;   
    buttonTitle: string
}

type dataBlockInfo = {
    image: string;
    buttonTitle: string;
}

export const data_1: dataBlockProduct[] = [
    {id: 1, image1:image1_1, image2:image1_2, title:'nike dunk low retro «Grey Fog»', brand:'Nike', prevPrice:'$99.90', finalPrice:'$89.90'},
    {id: 2,image1:image2_1, image2:image2_2, title:'Nike Air Force 1 \'07 «Fresh White»', brand:'Nike', prevPrice:'$168.90', finalPrice:'$84.90'},
    {id: 3,image1:image2_1, image2:image2_2, title:'Nike Air Force 1 \'07 «Fresh Coconut Milk»', brand:'Nike', prevPrice:'$168.90', finalPrice:'$84.90'},    
    {id: 4,image1:image4_1, image2:image4_2, title:'Nike Air Max 1 SC dark stucco', brand:'nike', prevPrice:'$189.90', finalPrice:'$94.90'},
    {id: 5,image1:image5_1, image2:image5_2, title:'Air Jordan 1 low 85 neutral grey', brand:'Jordan', prevPrice:'$199.90', finalPrice:'$99.99'},
    {id: 6,image1:image6_1, image2:image6_2, title:'Air Jordan 4 Retro military blue', brand:'Jordan', prevPrice:'$249.90', finalPrice:'$174.90'},
    {id: 7,image1:image7_1, image2:image7_2, title:'Nike Air Max 1 Easter Celebration', brand:'Nike', prevPrice:'$189.90', finalPrice:'$114.90'},
    {id: 8,image1:image8_1, image2:image8_2, title:'New Balance 2002', brand:'New Balance', prevPrice:'$159.90', finalPrice:'$79.90'},
]

export const title_1: titleBlockProduct = {
    id:1,
    mainTitle: "Wintersale at Titolo",
    secondTitle: "selected products at unbeatable prices",
    buttonTitle: "explore our wintersale",
} 

export const data_2: dataBlockProduct[] = [
    {id: 5,image1:image5_1, image2:image5_2, title:'Air Jordan 1 low 85 neutral grey', brand:'Jordan', prevPrice:'$199.90', finalPrice:''},
    {id: 6,image1:image6_1, image2:image6_2, title:'Air Jordan 4 Retro military blue', brand:'Jordan', prevPrice:'$249.90', finalPrice:''},
    {id: 7,image1:image7_1, image2:image7_2, title:'Nike Air Max 1 Easter Celebration', brand:'Nike', prevPrice:'$189.90', finalPrice:'$114.90'},
    {id: 8,image1:image8_1, image2:image8_2, title:'New Balance 2002', brand:'New Balance', prevPrice:'$159.90', finalPrice:''},
    {id: 1, image1:image1_1, image2:image1_2, title:'nike dunk low retro «Grey Fog»', brand:'Nike', prevPrice:'$99.90', finalPrice:''},
    {id: 2,image1:image2_1, image2:image2_2, title:'Nike Air Force 1 \'07 «Fresh White»', brand:'Nike', prevPrice:'$168.90', finalPrice:'$84.90'},
    {id: 3,image1:image2_1, image2:image2_2, title:'Nike Air Force 1 \'07 «Fresh Coconut Milk»', brand:'Nike', prevPrice:'$168.90', finalPrice:''},    
    {id: 4,image1:image4_1, image2:image4_2, title:'Nike Air Max 1 SC dark stucco', brand:'nike', prevPrice:'$189.90', finalPrice:'$94.90'},
]

export const title_2: titleBlockProduct = {
    id:2,
    mainTitle: "New Arrivals",
    secondTitle: "the freshest releases at Titolo",
    buttonTitle: "view all",
} 

export const dataInfo_1: dataBlockInfo[] = [
    {image: imageInfo_1, buttonTitle: "shop now"},
    {image: imageInfo_2, buttonTitle: "shop now"},
    {image: imageInfo_3, buttonTitle: "shop now"},
]

export const titleInfo_1: titleBlockInfo = {
    id:1,
    mainTitle: "NEW IN - THE FLAGSHIPS",
    secondTitle: "products that deserve a special showcase",
    buttonTitle: '',
}

export const dataInfo_2: dataBlockInfo[] = [
    {image: imageInfo_1_1, buttonTitle: ""},
    {image: imageInfo_1_2, buttonTitle: ""},
]

export const titleInfo_2: titleBlockInfo = {
    id:1,
    mainTitle: "visit us at our stores",
    secondTitle: "you are always welcome - visit us at our stores and experience our dedication for sneaker culture on site",
    buttonTitle: 'store info'
}