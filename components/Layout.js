import Head from 'next/head'
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return ( 
        <div className="content">
            <div className="container">

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
                </Head>

                <Navbar />
                { children }
                <Footer />
            </div>
        </div>
     );
}
 
export default Layout;