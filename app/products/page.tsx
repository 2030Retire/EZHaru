import Link from 'next/link';
import {CTA, PageHero, ProductMark, productInfo} from '@/components/BrandSystem';

const keys=(['recorder','expense','invoice','class'] as const);
export default function Products(){return <>
<PageHero eyebrow="EZHARU PRODUCTS" title="Tools for a simpler workday." copy="Focused, practical software built around everyday work. Start with one tool. Add more when they make sense." />
<section className="section"><div className="shell productHubGrid">{keys.map(k=><article className="hubCard" key={k}><ProductMark product={k}/><h2>{productInfo[k].tagline}</h2><p>{productInfo[k].description}</p><div className="hubMeta"><span>Built for practical adoption</span><span>Part of one EZHaru product family</span></div><Link className="textLink" href={`/products/${k}`}>Explore {productInfo[k].name} →</Link></article>)}</div></section>
<section className="section softSection"><div className="shell splitPanel"><div><div className="eyebrow">ONE BRAND. FOCUSED TOOLS.</div><h2>Use only what makes the day easier.</h2><p>EZHaru products share the same design language and practical philosophy, but each solves a specific operational problem. No forced suite. No unnecessary complexity.</p></div><div className="simpleChecklist"><p>✓ Clear purpose</p><p>✓ Consistent experience</p><p>✓ Practical workflows</p><p>✓ Room to integrate</p></div></div></section><CTA/>
</>}
