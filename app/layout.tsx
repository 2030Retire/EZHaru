import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'EZHaru | Making every workday easier',
  description: 'EZHaru helps small and mid-sized businesses simplify everyday work through practical systems, automation, AI and purpose-built software.',
  robots: { index:false, follow:false }
};

const logo='https://raw.githubusercontent.com/2030Retire/ezworks-site/master/public/ezworks-symbol.png';
function Brand(){return <Link href="/" className="brand"><img src={logo} alt="EZHaru"/><span><b><i>EZ</i>Haru</b><small>Making every workday easier.</small></span></Link>}

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>
    <header><div className="shell nav"><Brand/><nav><Link href="/solutions">Solutions</Link><Link href="/products">Products</Link><Link href="/how-we-work">How We Work</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav><Link className="btn" href="/contact">Request a Review →</Link></div></header>
    <main>{children}</main>
    <footer><div className="shell foot"><Brand/><div className="footLinks"><Link href="/solutions">Solutions</Link><Link href="/products">Products</Link><Link href="/how-we-work">How We Work</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div><div>© {new Date().getFullYear()} EZHaru, LLC.</div></div></footer>
  </body></html>
}
