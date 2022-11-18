/**
 * Edit meetup page.
 * 
 * Performs an API request to mongodb in order to get the current meetup details, then passes this through to page props
 * 
 * When the form is submitted, it performs an api request using mongoshell to the database in order to update our resources based on uuid
 */

import { uri } from "../../api/uri";
import EditMeetupForm from "../../../components/forms/EditMeetupForm";
import { MongoClient } from "mongodb";
import LoadingSpinner from "../../../components/ui/LoadingSpinner";
import { useRouter } from 'next/router';
import Head from "next/head";
import ErrorLoading from "../../../components/errors/ErrorLoading";

// New meetup form
const EditMeetupPage = ({meetupData}) => { 

    // Choose to show our loading spinner or the content of the page once our hydration completes
    let spinnerOrMeetup;

    const router = useRouter();
        
    const editMeetupHandler = async (newMeetupData) => {

        // Make an api call to our local file
        const result = await fetch('/api/edit-meetup',{
            method: 'POST',
            body: JSON.stringify(newMeetupData),
            headers: {
                'Content-type' : 'application/json'
            }
        }); 
    
        if (result.ok) {
            router.push("/");
        }
        
    };

    if ( meetupData === null) {

        spinnerOrMeetup = <ErrorLoading/>

    } else 
    if ( typeof(meetupData ) === 'undefined') {

        spinnerOrMeetup = <LoadingSpinner/>
        
    } else {
        spinnerOrMeetup = 
        <div>

            <Head>
                <title>{meetupData.title}</title>
                <meta charSet="UTF-8"/>
                <meta name="author" content="Nothile Moyo"/>
                <meta 
                    name="description" 
                    content={meetupData.description}
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <link rel="icon" href="/next-js-logo.svg" />
            </Head>

            <EditMeetupForm meetup={meetupData} editMeetup={editMeetupHandler}/>
            
        </div>
    }

    return(
        spinnerOrMeetup
    );
}

export const getServerSideProps = async (context) => {

    const meetupId = context.params.meetupId;

    // Connect to our database with mongo
    const client = await MongoClient.connect(uri);

    // Create a cursor for a database instance. A cursor is an object which has methods which can be used to mutate database entries
    const database = client.db('meetups');

    // Get the meetups array before conversion and then filter out the current meetup by filtering it's ID
    // We get the id for this comparison in our context object we pass through which references our URL parameters
    const meetupsCollection = database.collection('meetups').find({});

    // Convert our value into an array with a single entry since we only have the cursor above, and the data
    const meetups = await meetupsCollection.toArray();

    // Create a seriable array so we can filter out the ID from it
    const serializedMeetups = meetups.map((meetup) => {
        
        return {
        id: meetup.id,
        title: meetup.title,
        image: meetup.image,
        description: meetup.description,
        address: meetup.address
        };

    });

    // Find our meetup uniquely in the array
    const filteredMeetup = serializedMeetups.find((meetup) => {
        return (meetup.id === meetupId);
    });

    client.close();

    return {
        props:{
            meetupData: filteredMeetup ? filteredMeetup : null
        }
    };
};

export default EditMeetupPage;