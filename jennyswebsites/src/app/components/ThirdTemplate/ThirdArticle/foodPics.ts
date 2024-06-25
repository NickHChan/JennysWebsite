import p1 from '../../../../../images/p1.jpg'
import p2 from '../../../../../images/p2.jpg'
import p3 from '../../../../../images/p3.jpg'
import p4 from '../../../../../images/p4.jpg'
import p5 from '../../../../../images/p5.jpg'
import p6 from '../../../../../images/p6.jpg'
import p7 from '../../../../../images/p7.jpg'
import p8 from '../../../../../images/p8.jpg'
import p9 from '../../../../../images/p9.jpg'
import p10 from '../../../../../images/p10.jpg'
import p11 from '../../../../../images/p11.jpg'
import p12 from '../../../../../images/p12.jpg'
import { StaticImageData } from 'next/image'


interface picUrl {
    picture: StaticImageData;
}

const foodPics: picUrl[] = [
    {
        picture: p1
    },
    {
        picture: p2
    },
    {
        picture: p3
    },
    {
        picture: p4
    },
    {
        picture: p5
    },
    {
        picture: p6
    },
    {
        picture: p7
    },
    {
        picture: p8
    },
    {
        picture: p9
    },
    {
        picture: p10
    },
    {
        picture: p11
    },
    {
        picture: p12
    }
]

export default foodPics;