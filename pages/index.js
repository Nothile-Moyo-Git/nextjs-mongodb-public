import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';
import { uri } from './api/uri';

// Generate our unique ID's
const { MongoClient } = require('mongodb');

export default function HomePage({meetups}) {

  const loadedMeetups = meetups.length > 0 ? meetups : [];

  return (
    <div className='home'>
      
      <Head>
        <title>NM - React Meetups</title>
        <meta charSet="UTF-8"/>
        <meta name="author" content="Nothile Moyo"/>
        <meta 
          name="description" 
          content="Browse a huge list of meetups. This app was created by Nothile Moyo using React.JS, Next.JS, MongoDB & SCSS. Works as a CRUD application"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <link rel="icon" href="/next-js-logo.svg" />
      </Head>

      <main className="main">
        <MeetupList meetups={loadedMeetups}/>
      </main>

    </div>
  )
};

export const getServerSideProps = async () => {

  // Connect to our database with mongo
  const client = await MongoClient.connect(uri);

  // Create a cursor for a database instance. A cursor is an object which has methods which can be used to mutate database entries
  const database = client.db('meetups');

  const meetupsCollection = database.collection('meetups').find({});

  const meetups = await meetupsCollection.toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        id: meetup.id,
        title: meetup.title,
        image: meetup.image,
        description: meetup.description,
        address: meetup.address
      }))
    }
  };

};
