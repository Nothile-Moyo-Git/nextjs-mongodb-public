/**
 * 
 * Meetup item component
 * 
 * Takes meetup information passed through from MeetupList and renders a card containing meetup information and buttons to implement basic crud functionality
 * 
 * The delete button only applies to non-protected resources
 * 
 * @params props : any
 * @param id : string
 * @param image : string
 * @param title : string
 * @param address : string
 * @param index : number
 * @returns MeetupItem : jsx
 * 
 */

import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/router';

import dynamic from 'next/dynamic';

const OptimizedCard = dynamic(() => import('../ui/OptimizedCard'));
const ImageFallback = dynamic(() => import('../ui/ImageFallback'));

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

function MeetupItem(props) {

  // Check if our current component is intersecting with our screen in order to show our slide in animation
  const { ref, inView } = useInView();

  // Extract id from props by using object destructuring
  const { id } = props;

  const isProtectedResource = validateID(id);

  // Create router instance
  const router = useRouter();

  // If our card is in view, we add the slide-in class which triggers the slide in animation
  const isIntersecting = () => {
    
    if ( inView === true ) {
      return `fade-in`;
    }

  };
  
  // Show details handler to redirect to the meetup detail page
  const showDetailsHandler = (event) => {
    event.preventDefault();
    router.push(`/${id}`);
  };

  // Edit details handler to update our meetup information
  const editMeetupHandler = (event) => {
    event.preventDefault();
    router.push(`/${id}/edit`);

  };

  // Delete neetup handler
  const deleteMeetupHandler = async (event) => {
    event.preventDefault();

    const result = await fetch('/api/delete-meetup',{
      method: 'POST',
      body: JSON.stringify(id),
      headers: {
          'Content-type' : 'application/json'
      }
    }); 

    if (result.ok) {
      router.reload();
    }
  
  };

  return (
    <li className="meetups__item" ref={ref}>

      <OptimizedCard showCard={isIntersecting()} className="fade-in">

      { !isProtectedResource &&
        <button className="meetups__delete" onClick={deleteMeetupHandler}>x</button>
      }

        <div className="meetups__image">
          <ImageFallback url={props.image} title={props.title} protectedResource={isProtectedResource}/>
        </div>

        <div className="meetups__context">
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>

        <div className="meetups__actions">

          <button onClick={showDetailsHandler}>More Info</button>

          { !isProtectedResource &&
            <button onClick={editMeetupHandler}>Edit</button>
          }

        </div>

      </OptimizedCard>

    </li>
  );
}

export default MeetupItem;
