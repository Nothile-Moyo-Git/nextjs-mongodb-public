import { useRef } from 'react';
import OptimizedCard from "../ui/OptimizedCard";
import { TbArrowNarrowLeft } from "react-icons/tb";
import { useRouter } from "next/router";

function NewMeetupForm(props) {

  const { v4: uuidv4 } = require('uuid')
  // Create our refs for our inputs
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  // Define our router so we can go to all meetings page easily
  const router = useRouter();

  function submitHandler(event) {
    event.preventDefault();

    // Create our inputs for form submission
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      id: uuidv4(),
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  const backButtonHandler = (event) => {
    event.preventDefault();

    // Go back to meetups page
    router.push("/");
  }

  return (
    <div className="meetups__form">

      <span className="meetups__back-button" onClick={backButtonHandler}>
        <TbArrowNarrowLeft/>
        <p>Go back to meetups</p>
      </span>

      <OptimizedCard className="gradientForm" showCard="fade-in">

        <form onSubmit={submitHandler}>

          <div className="meetups__control">
            <h1>Create new meetup</h1>
          </div>

          <div className="meetups__control">
            <label htmlFor='title'>Title*</label>
            <input 
              type='text' 
              required 
              id='title' 
              ref={titleInputRef} 
            />
          </div>

          <div className="meetups__control">
            <label htmlFor='image'>Meetup Image</label>
            <input 
              type='url' 
              required 
              id='image' 
              ref={imageInputRef} 
            />
          </div>

          <div className="meetups__control">
            <label htmlFor='address'>Address</label>
            <input type='text' required id='address' ref={addressInputRef} />
          </div>

          <div className="meetups__control">
            <label htmlFor='description'>Description</label>
            <textarea
              id='description'
              required
              rows='5'
              ref={descriptionInputRef}
            ></textarea>
          </div>
      
          <div className="meetups__actions">
            <button>Add Meetup</button>
          </div>
          
        </form>

      </OptimizedCard>

    </div>
  );
}

export default NewMeetupForm;
