import Head from 'next/head'
import Link from 'next/link'

import Title from '../components/title'
import Group from '../components/group'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Callum Young</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Bungee+Hairline&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Bungee+Hairline&family=Gruppo&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Aldrich&display=swap" rel="stylesheet"></link>
      </Head>

      <main>
        <Title class="title" />
        <Group projects={[
          { name: "Partnyr", url: "https://partnyr.com", image: "partnyr_small.png", stack: "NodeJS, NextJS, React, Typescript, Prisma, React" },
          { name: "MetaScout Analytics", url: "https://metascout.gg", image: "metascout.svg", stack: "NextJS, Typescript, React, Prisma, Vercel" },
          { name: "Gif Editor", url: "https://github.com/CallumHYoung/GifEditor", image: "editor.svg", "stack": "NodeJS" },
          { name: "Online Theatre", url: "google.com", image: "theatre.svg", stack: "NodeJS, ThreeJS" },
          { name: "Discord Bot", url: "google.com", image: "email.svg", stack: "NodeJS, DiscordJS" },
          { name: "CuddleMe App", url: "google.com", image: "email.svg", stack: "Kotlin, Java" },
          { name: "Website (This!)", url: "https://www.callumyoung.com/", image: "email.svg", stack: "NextJS, NodeJS, React, Vercel" }
        ]}></Group>
      </main>

      <footer>
        <a
          href="https://github.com/CallumHYoung"
          target="_blank"
          rel="noopener noreferrer"
        >

          <img src="github.svg" alt="GitHub" className="logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/callumhyoung/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="linkedin.svg" alt="LinkedIn" className="logo" />
        </a>
        <a
          href="mailto:contact@callumyoung.com?subject = Hello from Callumyoung.com&body = Message"
          target="_blank"
          rel="noopener noreferrer">
          <img src="email.svg" alt="Email" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .title {
          font-family: 'Lora', serif;
        }
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

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #efce71;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 2em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
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
