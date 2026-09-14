import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { COMPANY_LOGO } from '@/components/BrandSystem';

export const metadata: Metadata = {
  title: 'EZHaru | Making every workday easier',
  description: 'EZHaru helps small and mid-sized businesses simplify everyday work through practical systems, automation, AI and purpose-built software.',
  robots: { index:false, follow:false }
};

function Brand(){return <Link href="/" className="brandLogo" aria-label="EZHaru home"><img src={COMPANY_LOGO} alt="EZHaru — Making every workday easier."/></Link>}

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>
    <header className="siteHeader"><div className="shell nav"><Brand/><nav><Link href="/products">Products</Link><Link href="/solutions">Solutions</Link><Link href="/how-we-work">How We Work</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav><Link className="btn navBtn" href="/contact">Request a Review →</Link></div></header>
    <main>{children}</main>
    <footer className="siteFooter"><div className="shell footerTop"><div className="footerBrand"><Brand/><p>Practical tools and services for real work.<br/>Start simple. Save time. Focus on what matters.</p></div><div><b>Products</b><Link href="/products/recorder">Recorder</Link><Link href="/products/expense">Expense</Link><Link href="/products/invoice">Invoice</Link><Link href="/products/class">Class</Link></div><div><b>Solutions</b><Link href="/solutions">Process & Operations</Link><Link href="/solutions">Business Systems</Link><Link href="/solutions">Automation & AI</Link><Link href="/how-we-work">How We Work</Link></div><div><b>Company</b><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/how-we-work">Operational Review</Link></div></div><div className="shell footerBottom"><span>© {new Date().getFullYear()} EZHaru, LLC. All rights reserved.</span><span>Groundwork before AI.</span></div></footer>
  </body></html>
}
