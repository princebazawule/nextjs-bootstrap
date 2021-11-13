import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return ( 
        <header className="mb-auto">
            <div>
            <Link href="/">
                <a className="logo">
                    <Image 
                        src="/vercel.svg"
                        alt="logo"
                        width={72}
                        height={16}
                        css="logo-image"
                    />
                </a>
            </Link>
            <nav className="nav nav-masthead justify-content-center float-md-end">
                <Link href="/clients"><a>Clients</a></Link>
                <Link href="/work"><a>Work</a></Link>
                <Link href="/connect"><a>Connect</a></Link>
                <Link href="/blog"><a>Blog</a></Link>
            </nav>
            </div>
        </header>
     );
}
 
export default Navbar;