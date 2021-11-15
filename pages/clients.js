import Head from 'next/head'
import Image from 'next/image'

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
                <h1 className="display-1 text-black">We&apos;ve worked with</h1>
                <p className="display-6 text-muted">some of our amazing clients.</p>
                <p>
                  {/* <a href="#" className="btn btn-primary my-2 btn-lg">
                    View more clients
                  </a> */}
                </p>
              </div>
            </div>
          </section>

          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {displayedPosts &&
                  displayedPosts.map((post) => {
                    console.log(post)
                    return (
                      <div key={post.id} className="col mb-3 mb-lg-5">
                          <div className="card shadow-sm h-100">
                            <Image
                              src={post.acf.logo.url}
                              alt={post.acf.client_name}
                              width={250}
                              height={200}
                              quality={100}
                              sizes={post.acf.logo.sizes}
                              priority
                              className="bg-dark p-5 card-img-top"
                              layout='responsive'
                            />

                            <div className="card-body d-flex flex-column">
                              <p className="card-text text-black fw-light fs-4 py-4 lh-sm">
                                {post.acf.client_name}
                              </p>
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