import Head from 'next/head'
import styles from '../styles/Connect.module.css'

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

            <main className={styles.main}>
                <div className='connect-container'>
                        <div className="connect-heading">
                            <h1 className={styles.title}>connect</h1>
                        </div>
                        
                        <div className='connect-list'>
                            <div className='socials'>
                                <h3>socials</h3>

                                {items && (
                                    <ul>
                                        <li><a href={items.twitter} target='_blank' rel='noreferrer' onClick={() => sendLinkClickEvent('twitter')} title={'twitter'}>twitter</a></li>
                                        <li><a href={items.facebook} target='_blank' rel='noreferrer' onClick={() => sendLinkClickEvent('facebook')} title={'facebook'}>facebook</a></li>
                                        <li><a href={items.linkedin} target='_blank' rel='noreferrer' onClick={() => sendLinkClickEvent('linkedin')} title={'linkedin'}>linkedin</a></li>
                                    </ul>
                                )}
                            </div>

                            <div className='hello'>
                                <h3>say hello</h3>
                                
                                {items && (
                                    <ul>
                                        <li><a href={items.email} target='_blank' rel='noreferrer' onClick={() => sendLinkClickEvent('email')} title={'email'}>hello@pixldinc.com</a></li>
                                        <li><a href={items.skype} target='_blank' rel='noreferrer' onClick={() => sendLinkClickEvent('skype')} title={'skype'}>skype call</a></li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
            </main>
        </>
     );
}
 
export default Connect;