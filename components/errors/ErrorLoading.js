/**
 * 
 * ErrorLoading component
 * 
 * Used to display error information when rendering from the server as redirects cannot be used server side, only client in Next.js
 * 
 * @param { type : string }
 *  
 */

import { useRouter } from "next/router";
import Link from 'next/link';

const ErrorLoading = () => {

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

};

export default ErrorLoading;