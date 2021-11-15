import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SvgPixld from "../components/icons/Pixld"

const menu = [
    { title: 'Clients', path: '/clients' },
    { title: 'Work', path: '/work' },
    { title: 'Connect', path: '/connect' },
    { title: 'Blog', path: '/blog' },
  ]

const Navbar = () => {

    const router = useRouter()
    // console.log(router.pathname)

    return ( 
        <header className="px-5 py-3 w-100">
            <div className='d-flex flex-row justify-content-between'>
            <Link href="/">
                <a className="logo">
                    <SvgPixld />
                </a>
            </Link>
            <nav className="nav nav-masthead justify-content-center float-md-end">

                {menu.map((item, index) => {
                    return (
                    <Link key={index} href={item.path}>
                        <a
                        data-cy="nav-item" 
                        className={`mx-2 fw-bold ${router.pathname === item.path ? 'text-color-purple' : 'text-color-black text-color-purple-hover'}`}
                        >
                        {item.title}
                        </a>
                    </Link>
                    )
                })}
            </nav>
            </div>
        </header>
     );
}
 
export default Navbar;