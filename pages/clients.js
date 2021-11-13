import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Clients.module.scss'

export const getStaticProps = async () => {
    const response = await fetch('https://pixldinc.link/pixldcms/wp-json/acf/v3/clients?page=1&per_page=15')
    
    if(!response.ok) {
        console.log(`...no posts`)
        return
    }
    const posts = await response.json()
    const displayedPosts = posts.filter(post => post.acf.display)
  
    // console.log(posts)
    return {
      props: { displayedPosts }
    }
}

const Clients = ({ displayedPosts }) => {
    return ( 
        <>
            <Head>
                <title>PixlD - Clients</title>
                <meta name="title" content="PixlD - Clients" />
                <meta name="description" content="Boutique web design & development based in Barbados. Here are some clients we've worked with" />
                
                {/* Open Graph / Facebook */}
                <meta name="og:title" content="PixlD - Clients" />
                <meta name="og:description" content="Boutique web design & development based in Barbados. Here are some clients we've worked with" />

                {/* Twitter */}
                <meta name="twitter:title" content="PixlD - Clients" />
                <meta name="twitter:description" content="Boutique web design & development based in Barbados. Here are some clients we've worked with" />
            </Head>
            
            <main className={styles.main}>
                <div className={styles.title}>
                    <h1>we&apos;ve worked with</h1>
                </div>

                <div className='client-list'>
                    {displayedPosts && (displayedPosts.map((post) => {
                        return (
                            <div 
                                key={post.id} 
                                className={styles.client_item}>
                                    <Image 
                                        src={post.acf.logo.sizes['1536x1536']}
                                        alt={post.acf.client_name}
                                        width={2400}
                                        height={1598}
                                        layout="responsive"
                                        quality={65}
                                    />
                            </div>
                        )
                    }))}
                </div>
            </main>
        </>
     );
}
 
export default Clients;