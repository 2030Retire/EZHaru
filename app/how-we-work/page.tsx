import {CTA, PageHero} from '@/components/BrandSystem';

const phases=[
 ['01','Understand','We listen, observe and map the work as it really happens — including exceptions, workarounds and handoffs.'],
 ['02','Define','We turn what we learn into a clear process, priorities and practical requirements before choosing the solution.'],
 ['03','Build & Connect','We configure, integrate or build only what the workflow needs, keeping the design as simple as possible.'],
 ['04','Adopt & Improve','We help the new way of working settle in, measure friction and keep improving where it is useful.']
];
export default function HowWeWork(){return <>
<PageHero eyebrow="HOW WE WORK" title="Practical. Focused. Together." copy="We keep projects small enough to understand, clear enough to act on and flexible enough to stop after any useful stage." />
<section className="section"><div className="shell methodGrid"><div className="methodIntro"><div className="eyebrow">A SIMPLE OPERATING MODEL</div><h2>Clarity before complexity.</h2><p>The goal is not a bigger project. The goal is a better workday. Each phase should create something useful on its own.</p></div><div className="methodSteps">{phases.map(([n,title,copy])=><article key={n}><span>{n}</span><div><h2>{title}</h2><p>{copy}</p></div></article>)}</div></div></section>
<section className="section softSection"><div className="shell reviewBand"><div><div className="eyebrow">A PRACTICAL STARTING POINT</div><h2>Two-Week Operational Review</h2><p>A focused engagement to understand the current operation, identify the highest-value opportunities and leave you with a practical roadmap.</p></div><div className="priceCard"><small>FIXED PRICE</small><strong>$2,400</strong><span>Creditable toward implementation when applicable.</span></div></div></section>
<section className="section"><div className="shell exitGrid"><article><span>1</span><h3>Useful even if we stop</h3><p>Every stage should leave you with clearer documentation, decisions or a roadmap.</p></article><article><span>2</span><h3>No technology for its own sake</h3><p>We use software, automation and AI only when they improve the operating result.</p></article><article><span>3</span><h3>Designed for adoption</h3><p>The best solution is the one the team can actually understand and use every day.</p></article></div></section><CTA/>
</>}
