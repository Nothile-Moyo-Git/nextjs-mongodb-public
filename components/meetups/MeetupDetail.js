import { useRouter } from 'next/router';
import { TbArrowNarrowLeft } from "react-icons/tb";
import ImageFallback from '../ui/ImageFallback';

// Protected ID's
const protectedIDs = [
    "8995f640-763f-463e-93f2-92af56571b43",
    "0b04f4cd-f94c-492c-bbab-bd1cf1b50055",
    "120eb98e-630a-42ca-97be-32d36a3f6ef4",
    "9d76119c-4780-43fc-a7af-7db2490b9a1d",
    "bbc7f779-8cac-454e-990a-b59060ece517"
];
  
// Validate whether the ID passed through props is valid or nah
const validateID = (meetupID) => {
  
    let isValid = false;
  
    // Check if the ID's match verbatum
    protectedIDs.forEach((id) => {
  
      if (id === meetupID) {
        isValid = true;
      }
  
    });
  
    return isValid;
  
};

const MeetupDetail = (props) => {

    // Set our variable and then redefine them if props.meetup isn't null
    let 
    id = "",
    image = "",
    title = "",
    description = "", 
    address = "",
    meetupCard = "";

    // router for our programmatic link
    const router = useRouter();

    // Redirect us back to the meetups page programmatically since we can't nest components inside a Link component
    const backButtonHandler = () => {
        router.push(`/`);
    };

    // If we have a meetup object in our props, we redefine our variables
    if (props.meetup !== null) {

        id = props.meetup.id;
        image = props.meetup.image;
        title = props.meetup.title;
        description = props.meetup.description;
        address = props.meetup.address;

        // Check if image is protected so we can optimize it in our fallback image component
        const isProtectedResource = validateID(id);

        meetupCard = 
        <article className="meetup-article">

            <div className="meetup-article__home-nav" onClick={backButtonHandler}>
                <TbArrowNarrowLeft/>
                <p>Go back to meetups</p>
            </div>

            <ImageFallback 
                url={image} 
                title={title} 
                protectedResource={isProtectedResource}
                classes="meetup-article__image"
            />

            <h1 className="meetup-article__title">{ title }</h1>

            <address>{ address }</address>

            <p className="meetup-article__description">{ description }</p>

        </article>;

    }else{
        meetupCard = 
        <article className="meetup-article">
            <div className="meetup-article__home-nav" onClick={backButtonHandler}>
                <TbArrowNarrowLeft/>
                <p>Go back to meetups</p>
            </div>
            <p>Error: No meeting found with this ID</p>
        </article>
    }
    
    return(
        meetupCard
    );
}

export default MeetupDetail;
