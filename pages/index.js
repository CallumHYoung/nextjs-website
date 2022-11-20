import styles from './index.module.css';

import Head from 'next/head'
import Footer from '../components/footer/footer';
import Card from '../components/profileCard/card';
import Projects from '../components/projects/projects';
import Project from '../components/projects/project/project';

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

      {/* <Gacha/> */}
      {/* <Navigation/> */}

      <main>
        <Card/>
        {/* <Projects>
          <a name="projects"/>
          <Project name="Twitch Stock Exchange"/>
          <Project name="Online theatre" img="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/twitch-512.png"/>
          <Project name="Metascout Analytics"/>
        </Projects> */}
        {/* <Group projects={[
          { name: "Partnyr", url: "https://partnyr.com", image: "partnyr_small.png", stack: "NodeJS, NextJS, React, Typescript, Prisma, React" },
          { name: "MetaScout Analytics", url: "https://metascout.gg", image: "metascout.svg", stack: "NextJS, Typescript, React, Prisma, Vercel" },
          { name: "Gif Editor", url: "https://github.com/CallumHYoung/GifEditor", image: "editor.svg", "stack": "NodeJS" },
          { name: "Online Theatre", url: "google.com", image: "theatre.svg", stack: "NodeJS, ThreeJS" },
          { name: "Discord Bot", url: "google.com", image: "email.svg", stack: "NodeJS, DiscordJS" },
          { name: "CuddleMe App", url: "google.com", image: "email.svg", stack: "Kotlin, Java" },
          { name: "Website (This!)", url: "https://www.callumyoung.com/", image: "email.svg", stack: "NextJS, NodeJS, React, Vercel" }
        ]}/> */}
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
          width: 70%;
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
