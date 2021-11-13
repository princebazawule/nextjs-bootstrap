import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Blog.module.scss'


export const getStaticProps = async () => {
    const response = await fetch('https://pixldinc.link/pixldcms//wp-json/wp/v2/posts?page=1&per_page=50')
    
    if(!response.ok) {
        console.log(`...no posts`)
        return
    }
    const posts = await response.json()
  
    // console.log(posts)
    return {
      props: { posts }
    }
}

const Blog = ({ posts }) => {
    return ( 
        <>
            <Head>
                <title>PixlD - Blog</title>
                <meta name="title" content="PixlD - Blog" />
                <meta name="description" content="Our latest web, design & tech musings" />
                
                {/* Open Graph / Facebook */}
                <meta name="og:title" content="PixlD - Blog" />
                <meta name="og:description" content="Our latest web, design & tech musings" />

                {/* Twitter */}
                <meta name="twitter:title" content="PixlD - Blog" />
                <meta name="twitter:description" content="Our latest web, design & tech musings" />
            </Head>
            
            <main className={styles.main}>
                <div className={styles.title}>
                    <h1>latest articles</h1>
                </div>

                <div className='client-list'>
                    {posts && (posts.map((post) => {
                        return (
                            <article
                                key={post.id}
                                className="blog-item">
                                <header>
                                    <Link href={`/blog/${post.slug}`}>
                                        <a>
                                            <h2 dangerouslySetInnerHTML ={{__html: post.title.rendered}}></h2>
                                        </a>
                                    </Link>
                                </header>

                                <p dangerouslySetInnerHTML ={{__html: post.excerpt.rendered}}></p>
                            </article>
                        )
                    }))}
                </div>
            </main>
        </>
     );
}
 
export default Blog;