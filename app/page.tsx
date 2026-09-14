import Link from 'next/link';
import {Icon, ProductMark, productInfo} from '@/components/BrandSystem';

const productKeys=(['recorder','expense','invoice','class'] as const);
const steps=[
  ['search','Understand the work','Listen, observe, and map the real workflow.'],
  ['document','Define the process','Turn what we learn into a clear operating model.'],
  ['database','Fix inputs & outputs','Make handoffs and data usable and consistent.'],
  ['link','Connect the data','Reduce silos and connect the right systems.'],
  ['gear','Automate','Remove repetitive work where the process is stable.'],
  ['spark','Add AI where useful','Use AI only where it creates real operational value.']
];

export default function Home(){return <>
<section className="hero heroV2"><div className="shell heroGridV2">
  <div className="heroCopyV2"><div className="eyebrow">PEOPLE + PROCESS + A SMARTER TOMORROW</div><h1>Making every<br/>workday easier.</h1><p>We help small and mid-sized businesses simplify everyday work with practical systems, automation and AI.</p><div className="actions"><Link className="btn" href="/solutions">Explore Solutions →</Link><Link className="btn ghost" href="/products">Explore Products</Link></div><div className="trustV2"><span>Real business experience</span><span>Practical solutions</span><span>Measurable outcomes</span></div></div>
  <div className="heroVisual"><div className="heroNote">Less work.<br/>More what matters.</div><div className="heroPlant"><i/><i/><i/><b/></div><div className="heroLaptop"><div className="laptopTop"><div className="dashBrand">EZHaru</div><div className="dashGreeting"><small>GOOD MORNING</small><strong>A simpler workday ahead.</strong></div><div className="dashSearch">Search anything...</div><div className="dashCards">{productKeys.map(k=><div key={k}><span><Icon type={productInfo[k].icon}/></span><b>{productInfo[k].name}</b><small>{productInfo[k].tagline}</small></div>)}</div></div><div className="laptopBase"/></div><div className="heroMug">Better<br/>workdays<br/>ahead.</div></div>
</div></section>

<section className="section"><div className="shell"><div className="center intro"><div className="eyebrow">TWO WAYS WE HELP</div><h2>From understanding to real results.</h2><p>Whether you need hands-on support or focused software, EZHaru meets you where you are.</p></div><div className="help helpV2"><article><span className="circle"><Icon type="people"/></span><div><h3>Consulting & Solutions</h3><p>We study how the work actually happens, define the process, connect the systems and automate what makes sense.</p><Link href="/solutions">Explore Solutions →</Link></div></article><article><span className="circle"><Icon type="cube"/></span><div><h3>EZHaru Products</h3><p>Simple, practical tools built around real operational problems and designed for everyday work.</p><Link href="/products">Explore Products →</Link></div></article></div></div></section>

<section className="section products productsV2"><div className="shell"><div className="heading rowHeading"><div><div className="eyebrow">OUR PRODUCTS</div><h2>Tools for a simpler workday.</h2><p>Four focused tools. One EZHaru family.</p></div><Link className="textLink" href="/products">View all products →</Link></div><div className="cards cardsV2">{productKeys.map(k=><article key={k}><ProductMark product={k}/><h3>{productInfo[k].tagline}</h3><p>{productInfo[k].description}</p><Link href={`/products/${k}`}>Learn more →</Link></article>)}</div></div></section>

<section className="section approach approachV2"><div className="shell approachGridV2"><div><div className="eyebrow">OUR APPROACH</div><h2>Groundwork before AI.</h2><p>AI works best when your processes, data and systems are ready. We help you build that foundation first.</p><Link className="btn ghost" href="/how-we-work">See How We Work →</Link></div><div className="stepsV2">{steps.map(([icon,title,copy],i)=><div className="stepV2" key={title}><span><Icon type={icon}/></span><b>{title}</b><small>{copy}</small>{i<steps.length-1&&<i>→</i>}</div>)}</div></div></section>

<section className="section review reviewV2"><div className="shell reviewGridV2"><div><div className="eyebrow">START SMARTER</div><h2>Two-Week Operational Review</h2><h3>$2,400 fixed price</h3><p>We review your current operations, identify practical opportunities and deliver a roadmap you can act on. If you move forward with implementation, the review fee can be credited toward the work.</p><Link className="btn" href="/contact">Request a Review →</Link></div><div className="reviewVisual"><div className="meetingCard"><span>REAL CONVERSATIONS.</span><b>REAL PROGRESS.</b><i/></div></div><article><small>WHAT YOU LEAVE WITH</small><p><b>01</b> Current-state map</p><p><b>02</b> Prioritized opportunities</p><p><b>03</b> Practical roadmap</p></article></div></section>

<section className="principles principlesV2"><div className="shell"><span>Built around real operations.</span><b>Practical systems.</b><b>Clear processes.</b><b>Useful automation.</b><b>AI where it actually helps.</b></div></section>
</>}
