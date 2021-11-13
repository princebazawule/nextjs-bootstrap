import Head from 'next/head'
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return ( 
        <div className="d-flex min-vh-100 text-center text-white bg-dark">
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

                <Head>
                    <link rel="canonical" href="https://pixldinc.com" />
                    
                    {/* Open Graph / Facebook */}
                    <meta name="og:type" content="website" />
                    <meta name="og:url" content="https://pixldinc.com/" />
                    <meta name="og:image" content="https://pixldinc.link/pixldcms/assets/screenshot.png" />

                    {/* Twitter */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:url" content="https://pixldinc.com/" />
                    <meta name="twitter:image" content="https://pixldinc.link/pixldcms/assets/screenshot.png" />
                    
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>

                <Navbar />
                { children }
                <Footer />
            </div>
        </div>
     );
}
 
export default Layout;