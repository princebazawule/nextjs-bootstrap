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

            <main>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light text-black">Selected Work</h1>
                        <p className="lead text-muted">
                        This is a selection of of some of our previous work.
                        </p>
                        <p>
                        <a href="#" className="btn btn-primary my-2 btn-lg">
                            View more work
                        </a>
                        </p>
                    </div>
                    </div>
                </section>

                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {displayedPosts && (displayedPosts.map((post, index) => {
                            // console.log(post)
                            return (
                            <div key={post.id}>
                                <div className="col">
                                    <div className="card shadow-sm">
                                        <Image
                                            src={post.acf.splash.sizes.thumbnail} 
                                            alt={post.acf.client}
                                            width={500}
                                            height={500}
                                            layout="responsive"
                                            quality={100}
                                            className="bg-dark"
                                        />

                                        <div className="card-body">
                                            <p className="card-text text-black fw-light fs-5">
                                                {post.acf.client} <span>{post.acf.project_type}</span>
                                            </p>
                                            <div className="">
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => showWorkDetail(index)}>View</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            )
                        }))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
 
export default Work;