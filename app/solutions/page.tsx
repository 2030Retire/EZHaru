import Link from 'next/link';
import {CTA, Icon, PageHero} from '@/components/BrandSystem';

const items=[
 ['search','Process & Operations','Understand how work actually moves today — the handoffs, bottlenecks, exceptions and hidden manual work.'],
 ['gear','Automation','Automate stable, repetitive work after the process is clear enough to automate safely.'],
 ['link','Business Systems & Integration','Connect ERP, CRM, WMS, Microsoft 365 and other tools so information moves with less friction.'],
 ['database','Operational Visibility','Make the right status, exceptions and next actions easier to see without chasing people or spreadsheets.'],
 ['spark','AI Enablement','Add AI only where the data, process and business case are strong enough to make it useful.']
];
export default function Solutions(){return <>
<PageHero eyebrow="CONSULTING & SOLUTIONS" title="From operational friction to practical solutions." copy="We start with the work itself — not the technology. Then we simplify the process, improve the system flow and automate what makes sense." ><div className="actions"><Link className="btn" href="/contact">Request a Review →</Link><Link className="btn ghost" href="/how-we-work">How We Work</Link></div></PageHero>
<section className="section"><div className="shell solutionList">{items.map(([icon,title,copy],i)=><article key={title}><span><Icon type={icon}/></span><div><small>0{i+1}</small><h2>{title}</h2><p>{copy}</p></div></article>)}</div></section>
<section className="section softSection"><div className="shell splitPanel"><div><div className="eyebrow">WHAT WE DO DIFFERENTLY</div><h2>We do not start with “What can AI do?”</h2><p>We start with “What is making this work harder than it should be?” That changes the conversation from technology-first to outcome-first.</p></div><div className="comparePanel"><div><small>Instead of</small><b>Buying tools before the process is clear</b></div><div><small>We prefer</small><b>Understand → Define → Connect → Automate → Add AI</b></div></div></div></section><CTA/>
</>}
