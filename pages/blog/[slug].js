export const getStaticPaths = async () => {
    const response = await fetch('https://pixldinc.link/pixldcms//wp-json/wp/v2/posts?page=1&per_page=50')

    if(!response.ok) {
        console.log(`...no posts`)
        return
    }
    const posts = await response.json()
    // console.log(posts)
    const paths = posts.map(post => {
        return {
            params: {
                slug: post.slug
            }
        }
    })

    return {
       paths,
       fallback: false
    }
}

export const getStaticProps = async (context) => {
    // console.log(context)
    const slug = context.params.slug
    const response = await fetch(`https://pixldinc.link/pixldcms/wp-json/wp/v2/posts/?slug=${slug}`)
    
    if(!response.ok) {
        console.log(`...no posts`)
        return
    }
    const data = await response.json()
    const blog =data[0]

    return {
      props: { blog }
    }
}


const BlogDetails = ({ blog }) => {
        return (
            <>
                {blog && ( 
                <>
                    <h1 dangerouslySetInnerHTML ={{__html: blog.title.rendered}}></h1>
                    <div dangerouslySetInnerHTML ={{__html: blog.content.rendered}}></div>
                </>
                )}
            </>
        )
}
 
export default BlogDetails;