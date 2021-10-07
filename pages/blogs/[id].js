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
                id: post.id.toString()
            }
        }
    })

    return {
       paths,
       fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const response = await fetch('https://pixldinc.link/pixldcms//wp-json/wp/v2/posts/'+id)
    
    if(!response.ok) {
        console.log(`...no posts`)
        return
    }
    const data = await response.json()
    // console.log(data)
    return {
      props: { blog: data }
    }
}


const BlogDetails = ({ blog }) => {
    return ( 
        <div>
            <h1 dangerouslySetInnerHTML ={{__html: blog.title.rendered}}></h1>
            <div dangerouslySetInnerHTML ={{__html: blog.content.rendered}}></div>
        </div>
     );
}
 
export default BlogDetails;