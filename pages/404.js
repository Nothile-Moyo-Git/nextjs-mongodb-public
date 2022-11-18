// 404.js
import Link from 'next/link';
import { useRouter } from 'next/router';

const FourOhFour = () => {

  // Get the router so I can programmatically assign my back button
  const router = useRouter();

  const backLinkHandler = (event) => {
    event.preventDefault();

    router.back();
  };

  return(
    <section className="page-404">
        <h1 className="page-404__title">Error 404 - Page Not Found</h1>
        <Link href="/">View All Meetups</Link>
        <Link href="/new-meetup">Add New Meetup</Link>
        <p className="page-404__link" onClick={backLinkHandler}>Go back to previous page</p>
    </section>
  );
}

export default FourOhFour;