import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
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
            <Link href="/clients"><a>Clients</a></Link>
            <Link href="/work"><a>Work</a></Link>
            <Link href="/connect"><a>Connect</a></Link>
            <Link href="/blogs"><a>Blog</a></Link>
        </nav>
     );
}
 
export default Navbar;