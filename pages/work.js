import Head from 'next/head'
import { Fragment } from 'react'
import Image from 'next/image'
import styles from '../styles/Work.module.scss'

export const getStaticProps = async () => {
    const response = await fetch('https://pixldinc.link/pixldcms/wp-json/acf/v3/work?page=1&per_page=8')
    
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

const Work = ({ displayedPosts }) => {
    return ( 
        <>
            <Head>
                <title>PixlD - Work</title>
                <meta name="title" content="PixlD - Work" />
                <meta name="description" content="Boutique web design & development based in Barbados. Here is some of our work" />
            
                {/* Open Graph / Facebook */}
                <meta name="og:title" content="PixlD - Work" />
                <meta name="og:description" content="Boutique web design & development based in Barbados. Here is some of our work" />

                {/* Twitter */}
                <meta name="twitter:title" content="PixlD - Work" />
                <meta name="twitter:description" content="Boutique web design & development based in Barbados. Here is some of our work" />
            </Head>

            <main className={styles.main}>
                <div className="work-container">
                    <>
                        <h1 className={styles.title}>selected work</h1>

                        <div className="projects">
                            <div className="project-wrap">

                                {displayedPosts && (displayedPosts.map((post, index) => {
                                        return (
                                            <Fragment key={post.id}>
                                                <div key={post.id} className="section" onClick={() => showWorkDetail(index)}>
                                                    <div className='content'>
                                                        <p>{post.acf.client} <span>{post.acf.project_type}</span></p>
                                                    </div>
                                                    <div className="overlay"></div>
                                                    <Image 
                                                        src={post.acf.splash.sizes.thumbnail} 
                                                        alt={post.acf.client}
                                                        width={2400}
                                                        height={1598}
                                                        layout="responsive"
                                                        quality={65}  
                                                    />
                                                </div>
                                                
                                                {/* {activeIndex !== null && activeIndex === index ? (<WorkGallery key={index} activeIndex={activeIndex} onClick={closeGallery} post={post} />) : ''} */}
                                            </Fragment>
                                        )
                                    }))}
                            </div>
                        </div>
                    </>
                </div>
            </main>
        </>
     );
}
 
export default Work;