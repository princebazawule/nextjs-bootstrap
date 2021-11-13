import Head from 'next/head'
import Link from 'next/link'

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
      
      <main className='position-relative min-vh-100 d-flex flex-column justify-content-center align-items-center bg-dark'>
        

        <h1 className='fs-1 fw-light mb-4'>Who&apos;s PixlD?</h1>

        {items && ( 
          <div 
            className='fs-4 xl-mw-50 mx-auto' 
            dangerouslySetInnerHTML={{ __html: items.mini_profile}} ></div>
        )}

        <div className="get-in-touch mt-4">
          <Link href="/connect">
            <a>
              <button type="button" className="btn btn-primary btn-lg fs-3">get in touch</button>
            </a>
          </Link>
        </div>
      </main>
    </>
  )
}
