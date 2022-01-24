import Head from 'next/head'

import Group from '../components/group';
import Navigation from '../components/navigation/navigation';
import Footer from '../components/footer/footer';

import styles from './index.module.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Callum Young</title>
        <meta name="description" content="Callum Young - Software Engineer"/>
        <meta name="author" content="Callum Young"/>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Bungee+Hairline&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Bungee+Hairline&family=Gruppo&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Aldrich&display=swap" rel="stylesheet"></link>
      </Head>

      <Navigation/>
      <main>
        <Group projects={[
          { name: "Partnyr", url: "https://partnyr.com", image: "partnyr_small.png", stack: "NodeJS, NextJS, React, Typescript, Prisma, React" },
          { name: "MetaScout Analytics", url: "https://metascout.gg", image: "metascout.svg", stack: "NextJS, Typescript, React, Prisma, Vercel" },
          { name: "Gif Editor", url: "https://github.com/CallumHYoung/GifEditor", image: "editor.svg", "stack": "NodeJS" },
          { name: "Online Theatre", url: "google.com", image: "theatre.svg", stack: "NodeJS, ThreeJS" },
          { name: "Discord Bot", url: "google.com", image: "email.svg", stack: "NodeJS, DiscordJS" },
          { name: "CuddleMe App", url: "google.com", image: "email.svg", stack: "Kotlin, Java" },
          { name: "Website (This!)", url: "https://www.callumyoung.com/", image: "email.svg", stack: "NextJS, NodeJS, React, Vercel" }
        ]}/>
      </main>

      <Footer/>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #17202a;
          color: #2980b9;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
