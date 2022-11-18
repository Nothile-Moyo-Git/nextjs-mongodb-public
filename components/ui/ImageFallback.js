/**
 * 
 * Image fallback component
 * 
 * Checks if the image is a valid filestype and returns it. If not, it returns an SVG fallback response.
 * Prevents broken image issue
 * Uses next/image for optimization on protected resources
 * 
 * @param { url } : string
 * @param { classes } : string
 * @param { title } : string
 * @param { protectedResource } : boolean
 * 
 */

import { GiBleedingEye, GiCat, GiHollowCat, GiCondorEmblem, GiEvilBat } from "react-icons/gi";
import Image from "next/image";

const isImage = (src) => {

    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(src);
};

const ImageFallback = (props) => {

    // Get image url
    const { url, title, classes, protectedResource } = props;

    let image;

    // Set image to the supplied image or thumbnail depending on the extension of the image
    if ( isImage(url) === true ) {

        if (protectedResource === true) {

            image = 
            <Image
                src={url}
                alt={title}
                width={780}
                height={450}
            />;

        } else {

            image = 
            <img 
                src={url} 
                alt={title} 
                className={classes}
            />;

        }

    }else{

        image = 
        <div className="image-fallback"> 
            <GiHollowCat/>
        </div>;

    }

    return (
        <>
           { image }
        </>
    );

}

export default ImageFallback;

