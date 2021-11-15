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
      
      <main 
        className='position-relative min-vh-100 d-flex flex-column justify-content-center align-items-center bg bg-opacity-25 bg-dark'
        style={{backgroundImage: `url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80')`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, height: '100vh'}}
    >
      

      <h1 className='display-1 mb-4' style={{zIndex: `2000` }}>Who&apos;s PixlD?</h1>

      {items && ( 
        <div 
          className='fs-3 fw-light mx-auto w-100 w-md-75 w-xxl-50 '
          style={{zIndex: `2000` }}
          dangerouslySetInnerHTML={{ __html: items.mini_profile}} ></div>
      )}

      <div 
        className="get-in-touch mt-4"
        style={{zIndex: `2000` }}
      >
        <Link href="/connect">
          <a>
            <button type="button" className="btn btn-primary btn-lg fs-3">get in touch</button>
          </a>
        </Link>
      </div>

      <div 
        className='min-vh-100 min-vw-100 position-absolute'
        style={{backgroundColor: `rgba(0, 0, 0, 0.8)`}}
      ></div>

      {/* <img 
        src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80" 
className='position-relative min-vh-100 d-flex flex-column justify-content-center align-items-center bg-img bg-dark bg-blend-multiply' /> */}
        
      </main>
    </>)
}