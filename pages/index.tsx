import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ReactMarkdown from 'react-markdown'
import { GetStaticProps } from 'next'
import fs from 'fs/promises'
import { Paper } from '@material-ui/core'
import emoji from 'emoji-dictionary'

import { AnimatedBackground } from '../components/animatedBackground'

const emojiSupport = text => text.value.replace(/:\w+:/gi, name => emoji.getUnicode(name))
export default function Home({ source }) {
  return (
    <div className={styles.container}>
      <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div,
      div#__next > div > div {
        height: 100%;
        padding: 0;
      }
    `}</style>
      <AnimatedBackground>
        <Head>
          <title>GabrielTK</title>
          <link rel="icon" href="/favicon.ico" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
        </Head>

        <main className={styles.main}>


          <div style={{ margin: '5%' }}>
            <Paper elevation={3}>
              <div style={{ padding: "5%" }}>
                <h1 className={styles.title}>
                  GabrielTK
            </h1>
                <ReactMarkdown children={source} allowDangerousHtml={true} renderers={{ text: emojiSupport }}></ReactMarkdown>
              </div>
            </Paper>
          </div>

          {/*<div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          
        </div>*/}
        </main>

        {/*<footer className={styles.footer}>
        {<a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
        </footer>*/}
      </AnimatedBackground>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  let originalMd = await (await fs.readFile("./README.md")).toString()
  var md = originalMd.replace(/<!--- JSX\n(.*)\n-->/g, '$1')
    .replace(/<!--- (.*)END: NOX -->/gs, '')
  return {
    props: {
      source: md
    }
  }
}
