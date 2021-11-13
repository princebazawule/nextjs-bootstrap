import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export const getStaticProps = async () => {
    const response = await fetch('https://pixldinc.link/pixldcms//wp-json/wp/v2/posts?page=1&per_page=20')
    
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








            <main>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light text-black">Latest Articles</h1>
                            <p className="lead text-muted">Our latest articles, tips and more.</p>
                        </div>
                    </div>
                </section>



                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 card-group">
                        {posts && (posts.map((post) => {
                            // console.log(post)
                            return (
                            <article className='col-12 h-100' key={post.id}>
                                <div className="col">
                                    <Link href={`/blog/${post.slug}`}>
                                        <a>
                                            <div className="card shadow-sm">
                                                <div className='bg-dark'>
                                                    <h2 className='h-50 text-white fw-light py-5 px-4' dangerouslySetInnerHTML={{__html: post.title.rendered}}></h2>
                                                </div>
                                                
                                                <div className="card-body">
                                                    <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></div>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </article> 
                            )
                        }))}
                        </div>
                    </div>
                </div>
            </main>  
        </>
     );
}
 
export default Blog;