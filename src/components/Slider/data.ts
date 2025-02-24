import img1 from '../../assets/JI2756_05.jpg';
import img2 from '../../assets/JN4475_JN4472_JM3587_JD5471_JD3396_JD5469_JC6361_02.jpg';
import img3 from '../../assets/JQ5104_07.jpg';
import img4 from '../../assets/L47737400_04.jpg';
import img5 from '../../assets/L47741100_06.jpg';
import img6 from '../../assets/U740IN2_06.jpg';
import img7 from '../../assets/URC42LA_URC42LB_URC42BC_01.jpg';
import img8 from '../../assets/Wintersale.jpg';

type teaser = {
    image: string
    title: string
    buttonTitle: string
}

export const teasers: teaser[] = [
    { image: img1, title: "WMNS ADIDAS GAZELLE INDOOR", buttonTitle: "shop now" },
    { image: img2, title: "ADIDAS TAILORED COLLECTION", buttonTitle: "shop now" },
    { image: img3, title: "ADIDAS SAMBA 62", buttonTitle: "shop now" },
    { image: img4, title: "SALOMON XT-6", buttonTitle: "shop now" },
    { image: img5, title: "SALOMON XT-4 OG", buttonTitle: "shop now" },
    { image: img6, title: "NEW BALANCE 740", buttonTitle: "shop now" },
    { image: img7, title: "NEW BALACNE RC42", buttonTitle: "shop now" },
    { image: img8, title: "WINTERSALE AT TITOLO", buttonTitle: "More" },
];