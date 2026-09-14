import Link from 'next/link';
import {CTA, PageHero, ProductMark, productInfo} from '@/components/BrandSystem';

const keys=(['recorder','expense','invoice','class'] as const);
export default function Products(){return <>
<PageHero eyebrow="EZHARU PRODUCTS" title="Simple tools for real work." copy="Focused applications designed around everyday operational problems — so people can spend less time maintaining the work and more time moving it forward." />
<section className="section"><div className="shell productHubGrid">{keys.map(k=><article className={`hubCard ${k}`} key={k}><div className="hubLogo"><ProductMark product={k}/></div><h2>{productInfo[k].tagline}</h2><p>{productInfo[k].description}</p><div className="hubMeta"><span>Focused purpose</span><span>Consistent EZHaru experience</span></div><Link className="textLink" href={`/products/${k}`}>Explore {productInfo[k].name} →</Link></article>)}</div></section>
<section className="section softSection"><div className="shell splitPanel"><div><div className="eyebrow">BUILT FROM THE WORK ITSELF</div><h2>Products are the reusable result of the same operating method.</h2><p>Define the process, make the handoffs clear, capture the data and remove repeatable work. EZHaru products are focused starting points that come out of that procedure.</p></div><div className="simpleChecklist"><p>✓ Clear purpose</p><p>✓ Review where judgment matters</p><p>✓ Practical workflows</p><p>✓ Room to connect with other systems</p></div></div></section>
<section className="section productFamilyBand"><div className="shell"><div className="eyebrow">ONE HOUSE BRAND</div><h2>Recorder. Expense. Invoice. Class.</h2><p>Different jobs, one design language: simple, calm, practical and easy to understand.</p><div className="familyMarks">{keys.map(k=><ProductMark key={k} product={k} compact/>)}</div></div></section><CTA/>
</>}
