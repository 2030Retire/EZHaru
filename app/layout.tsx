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
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><header><div className="shell nav"><Brand/><nav><a href="#solutions">Solutions</a><a href="#products">Products</a><a href="#approach">How We Work</a><a href="#about">About</a><a href="mailto:hello@ezharu.co">Contact</a></nav><a className="btn" href="mailto:hello@ezharu.co">Request a Review →</a></div></header><main>{children}</main><footer><div className="shell foot"><Brand/><div>Practical systems. Clear processes. Useful automation.</div><div>© {new Date().getFullYear()} EZHaru, LLC.</div></div></footer></body></html>}
