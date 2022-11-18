/**
 * New Meetup page found in /pages/new-meetup/index.js
 * 
 * Displays the Component "New Component Form" and performs an API query to the endpoint "/api/new-meetup.js"
 * 
 * This call performs an insertOne query to the meetups database
 */

import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from 'next/router';
import Head from "next/head";

// New meetup form
const NewMeetupPage = () => {

    // Set the router so we change the page after submitting a form
    const router = useRouter();

    const addMeetupHandler = async (enteredMeetupData) => {

        // Make an api call to our local file
        await fetch('/api/new-meetup',{
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-type' : 'application/json'
            }
        });

        router.push('/');
        
    };

    return(
        <section>
                  
            <Head>
                <title>New Meetup Form</title>
                <meta charSet="UTF-8"/>
                <meta name="author" content="Nothile Moyo"/>
                <meta 
                    name="description" 
                    content="Create a new meetup to push up to MongoDB in the database."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <link rel="icon" href="/next-js-logo.svg" />
            </Head>

            <NewMeetupForm onAddMeetup={addMeetupHandler}/>

        </section>
    );
}

export default NewMeetupPage;