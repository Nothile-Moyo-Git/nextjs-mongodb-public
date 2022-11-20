# Next.js MongoDB Meetup App
## This is my meetup app built in Next.js, React, SCSS modules & MongoDB

#### This App is a CRUD app in order to start learning about Next.js, SCSS Modules and MongoDB for the MERN stack. Having spent a lot of time in vanilla React and doing it as a day job, I've been lookng to take a step in the next direction. I also learned about concepts such as CSS painting, CSR, ISR & SSR. CICD by use of Vercel, and also dynamic importing for performance.

#### Users go to the homepage and view a list of cards with meetups. These are called using getServerSideProps and filtered. Components are used to render the lists and cards. Some meetups are unprocted and will miss the X button in the top right and won't have an edit button. New cards will be unprotected and can be edited. Cards also have a "fallback" image component which uses next/image for lazyloading, and an optimized SVG if the filetype of the image isn't valid

#### It was a fun project! But definitely hard, I started using websockets instead of only API queries, and had performance issues in regards to painting and bundling. It was a good exercise in maximizing performance in a more scalable solution.

#### The App uses next/router and Next.js pages in order to perform routing. The private repo has the endpoints which are used to perform queries to the MongoDB backend using Mongoshell connected via sockets. The endpoints can be found via the /api folder. Fallback pages have been implemented for production.

SCSS/SCSS modules is used in order to style the app. I ran into significant performance issues with my gradient background and falling stars due to using too much of the CPU and not respecting painting rules. So I moved most animations over to the GPU ( by using transform ) and this netted me a 40% performance bump.

## Installation
run `npm install` followed by `npm audit fix` in order to instlal the required packages.

in order to create a local server, run `npm run dev` and navigate to http://localhost:3000

in order to create a build, run `npm run build`

The current node version for this project is 16.8. You can use nvm in order to achieve this. You can find out more here: https://github.com/coreybutler/nvm-windows

## Usage
You can add a meetup on the /add-meetup page
You can edit a meetup if you click on the edit button and the meetup isn't protected
You can delete a meetup by clicking the X button on the top right if it's unprocted
You can find out more information about each meetup by clicking on more info

## Deployment
This App uses VERCEL and CICD on a separate private repo. Each push made to the private repo results in an automatic deployment.
You can view the deployed version of the app here: https://nothile-meetup-list.vercel.app/ 

## Screenshot

![image](https://user-images.githubusercontent.com/15236959/202769980-48a01e3f-ea48-4b31-86f9-bdd42e1d9177.png)
