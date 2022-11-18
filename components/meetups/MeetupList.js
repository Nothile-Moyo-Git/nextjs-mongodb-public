/**
 *  MeetupList component, loops through the meetups passed through 
 * 
 *  Component is lazyloaded in order to improve performance
 * 
 *  Component is rendered from the "/" page
 */
import dynamic from 'next/dynamic';

const MeetupItem = dynamic(() => import('./MeetupItem'));

function MeetupList(props) {
  
  return (
    <ul className="meetups__list">
      {props.meetups.map((meetup, index) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          index={index}
        />
      ))}
    </ul>
  );

}

export default MeetupList;
