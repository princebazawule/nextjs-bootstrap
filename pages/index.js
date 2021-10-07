import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
  const response = await fetch('https://pixldinc.link/pixldcms/wp-json/acf/v3/pages/22?_embed')
  
  if(!response.ok) {
    console.log(`...not working`)
    return
  }

  const data = await response.json()

  // console.log(data)
  return {
    props: { items: data.acf }
  }
}

export default function Home({ items }) {
  return (
    <>
      <Head>
        <title>PixlD - We build beautiful websites</title>
        <meta name="title" content="PixlD - We build beautiful websites" />
        <meta name="description" content="We are a boutique, web design & development firm based in sunny Barbados" />
      
        {/* Open Graph / Facebook */}
        <meta name="og:title" content="PixlD - We build beautiful websites" />
        <meta name="og:description" content="We are a boutique, web design & development firm based in sunny Barbados" />

        {/* Twitter */}
        <meta name="twitter:title" content="PixlD - We build beautiful websites" />
        <meta name="twitter:description" content="We are a boutique, web design & development firm based in sunny Barbados" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>who&apos;s PixlD?</h1>

        {items && ( 
          <div 
            className={styles.description} 
            dangerouslySetInnerHTML={{ __html: items.mini_profile}} ></div>
        )}

        <div className="get-in-touch">
          <Link href="/connect">
            <a>
              <button>get in touch</button>
            </a>
          </Link>
        </div>
      </main>
    </>
  )
}
