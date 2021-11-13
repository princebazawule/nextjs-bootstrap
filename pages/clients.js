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
          <meta
            name="description"
            content="Boutique web design & development based in Barbados. Here are some clients we've worked with"
          />

          {/* Open Graph / Facebook */}
          <meta name="og:title" content="PixlD - Clients" />
          <meta
            name="og:description"
            content="Boutique web design & development based in Barbados. Here are some clients we've worked with"
          />

          {/* Twitter */}
          <meta name="twitter:title" content="PixlD - Clients" />
          <meta
            name="twitter:description"
            content="Boutique web design & development based in Barbados. Here are some clients we've worked with"
          />
        </Head>

        <main>
          <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light text-black">We&apos;ve worked with</h1>
                <p className="lead text-muted">These are some amazing clients we have had the pleasure of working with over the years.</p>
                <p>
                  <a href="#" className="btn btn-primary my-2 btn-lg">
                    View more clients
                  </a>
                </p>
              </div>
            </div>
          </section>

          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {displayedPosts &&
                  displayedPosts.map((post) => {
                    // console.log(post)
                    return (
                      <div key={post.id}>
                        <div className="col">
                          <div className="card shadow-sm">
                            <Image
                              src={post.acf.logo.sizes.thumbnail}
                              alt={post.acf.client_name}
                              width={100}
                              height={50}
                              layout="responsive"
                              quality={100}
                              object-fit='scale-down'
                              className="bg-dark"
                            />

                            <div className="card-body">
                              <p className="card-text text-black fw-light fs-4 py-4 lh-sm">
                                {post.acf.client_name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </main>
      </>
    )
}
 
export default Clients;