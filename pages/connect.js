import Head from 'next/head'

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

const Connect = ({ items }) => {

    const sendLinkClickEvent = (key) => {
        console.log(key)
        // ReactGA.event({
        //     category: 'Link Click',
        //     action: key
        // });
    }
    return ( 
        <>
            <Head>
                <title>PixlD - Connect</title>
                <meta name="title" content="PixlD - Connect" />
                <meta name="description" content="Boutique web design & development based in Barbados. Get in touch with us" />
            
                {/* Open Graph / Facebook */}
                <meta name="og:title" content="PixlD - Connect" />
                <meta name="og:description" content="Boutique web design & development based in Barbados. Get in touch with us" />

                {/* Twitter */}
                <meta name="twitter:title" content="PixlD - Connect" />
                <meta name="twitter:description" content="Boutique web design & development based in Barbados. Get in touch with us" />
            </Head>

            <main>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="display-1 text-black">Connect</h1>
                            <p className="display-6 text-muted">Get in touch on the socials.</p>
                        </div>
                    </div>
                </section>

                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className='connect-list'>
                            <div className='socials'>
                                <h3 className='fs-2 text-black mb-4'>socials</h3>

                                {items && (
                                    <ul className='m-0 p-0 mb-5 pb-4'>
                                        <li><a className='mb-2 fs-4 fw-light text-color-purple-hover' href={items.twitter} target='_blank' rel='noreferrer' onClick={() => sendLinkClickEvent('twitter')} title={'twitter'}>twitter</a></li>
                                        <li><a className='mb-2 fs-4 fw-light text-color-purple-hover' href={items.facebook} target='_blank' rel='noreferrer' onClick={() => sendLinkClickEvent('facebook')} title={'facebook'}>facebook</a></li>
                                        <li><a className='mb-2 fs-4 fw-light text-color-purple-hover' href={items.linkedin} target='_blank' rel='noreferrer' onClick={() => sendLinkClickEvent('linkedin')} title={'linkedin'}>linkedin</a></li>
                                    </ul>
                                )}
                            </div>

                            <div className='hello'>
                                <h3 className='fs-2 text-black mb-4'>say hello</h3>
                                
                                {items && (
                                    <ul className='m-0 p-0 mb-5 pb-4'>
                                        <li><a className='mb-2 fs-4 fw-light text-color-purple-hover' href={items.email} target='_blank' rel='noreferrer' onClick={() => sendLinkClickEvent('email')} title={'email'}>hello@pixldinc.com</a></li>
                                        <li><a className='mb-2 fs-4 fw-light text-color-purple-hover' href={items.skype} target='_blank' rel='noreferrer' onClick={() => sendLinkClickEvent('skype')} title={'skype'}>skype call</a></li>
                                    </ul>
                                )}
                            </div>
                        </div>   
                    </div>
                </div>
            </main>
        </>
    );
}
 
export default Connect;