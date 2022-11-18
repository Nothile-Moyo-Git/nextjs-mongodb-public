/**
 * Edit meetup form
 * Takes a jsx object in props which contains meetup data
 * 
 * Form updates programmatically using state
 * 
 * Performs an api request to an endpoint upon form submission to update the entry in the collection
 * 
 * @params
 * @param { object } : props {
 *  title : string
 *  email : string
 *  image : string
 *  description : string
 *  address : string
 * }
 */

import { useState } from 'react';
import OptimizedCard from '../ui/OptimizedCard';
import { TbArrowNarrowLeft } from "react-icons/tb";
import { useRouter } from "next/router";

const EditMeetupForm = (props) => {

    const [title, setTitle] = useState(props.meetup.title);
    const [image, setImage] = useState(props.meetup.image);
    const [description, setDescription] = useState(props.meetup.description);
    const [address, setAddress] = useState(props.meetup.address);

    // Router instance using the useRouter back for our back button
    const router = useRouter();

    // Edit form handler
    const editForm = (event) => {
        event.preventDefault();

        props.editMeetup({
            id: props.meetup.id,
            title: title,
            image: image,
            description: description,
            address: address
        });
    };

    // Input changes, we perform this using state since we're setting our initial text from props
    const titleChangeHandler = (event) => {
        event.preventDefault();
        setTitle(event.target.value);
    }

    const descriptionChangeHandler = (event) => {
        event.preventDefault();
        setDescription(event.target.value);
    }

    const addressChangeHandler = (event) => {
        event.preventDefault();
        setAddress(event.target.value);
    };

    const imageChangeHandler = (event) => {
        event.preventDefault();
        setImage(event.target.value);
    }

    const backButtonHandler = (event) => {
        event.preventDefault();

        // Go back to meetups page
        router.push("/");
    }

    return(
        <div className="meetups__form">

            <span className="meetups__back-button" onClick={backButtonHandler}>
                <TbArrowNarrowLeft/>
                <p>Go back to meetups</p>
            </span>

            <OptimizedCard className="gradientForm" showCard="fade-in">
                <form onSubmit={editForm}>

                    <div className="meetups__control">
                        <h1>{`Currently editing "${props.meetup.title}"`}</h1>
                    </div>

                    <div className="meetups__control">
                        <label htmlFor="title">New Title*</label>
                        <input 
                            type="text" 
                            required 
                            id="title"
                            value={title} 
                            onChange={titleChangeHandler}
                        />
                    </div>

                    <div className="meetups__control">
                        <label htmlFor="address">New Address</label>
                        <input
                            type="text"
                            required
                            id="address"
                            value={address}
                            onChange={addressChangeHandler}
                        />
                    </div>

                    <div className="meetups__control">
                        <label htmlFor="image">New Image</label>
                        <input
                            type="url"
                            required
                            id="image"
                            value={image}
                            onChange={imageChangeHandler}
                        />
                    </div>

                    <div className="meetups__control">
                        <label htmlFor="description">New Description</label>
                        <textarea
                            type="text"
                            required
                            id="description"
                            rows="5"
                            value={description}
                            onChange={descriptionChangeHandler}
                        />
                    </div>

                    <div className="meetups__actions">
                        <button>Update Meetup</button>
                    </div>

                </form>
            </OptimizedCard>
        </div>
    );
};

export default EditMeetupForm;