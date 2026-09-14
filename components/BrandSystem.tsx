import Link from 'next/link';

export type ProductKey='recorder'|'expense'|'invoice'|'class';

export const productInfo: Record<ProductKey,{name:string;tagline:string;description:string;icon:string;audience:string}>={
  recorder:{name:'Recorder',tagline:'Record. Transcribe. Remember.',description:'Turn calls, meetings and conversations into organized, searchable knowledge.',icon:'wave',audience:'Teams that need reliable notes and searchable conversation history.'},
  expense:{name:'Expense',tagline:'Capture. Review. Publish.',description:'Move receipts from capture to review and clean accounting-ready data.',icon:'receipt',audience:'Accounting firms and SMB finance teams managing recurring expense work.'},
  invoice:{name:'Invoice',tagline:'Create. Track. Get paid.',description:'Create invoices, send them clearly and keep payment visibility in one place.',icon:'document',audience:'Service businesses that need a simple, visible invoicing workflow.'},
  class:{name:'Class',tagline:'Members. Classes. Attendance. Progress.',description:'Manage members, schedules, attendance and progression for class-based businesses.',icon:'layers',audience:'Martial arts schools first, with room to expand to other class-based businesses.'}
};

export function Icon({type,className=''}:{type:string;className?:string}){
  const common={width:24,height:24,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.8,strokeLinecap:'round' as const,strokeLinejoin:'round' as const,className};
  if(type==='wave') return <svg {...common}><path d="M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4"/></svg>;
  if(type==='receipt') return <svg {...common}><path d="M6 3h12v18l-2-1.5L14 21l-2-1.5L10 21l-2-1.5L6 21V3Z"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>;
  if(type==='document') return <svg {...common}><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M9 12h6M9 16h6"/></svg>;
  if(type==='layers') return <svg {...common}><path d="m12 4 8 4-8 4-8-4 8-4Z"/><path d="m4 12 8 4 8-4M4 16l8 4 8-4"/></svg>;
  if(type==='people') return <svg {...common}><path d="M16 20v-1.5a4.5 4.5 0 0 0-4.5-4.5h-3A4.5 4.5 0 0 0 4 18.5V20"/><circle cx="10" cy="7" r="3"/><path d="M17 11a3 3 0 0 0 0-6M19 20v-1.5a4 4 0 0 0-2.5-3.7"/></svg>;
  if(type==='cube') return <svg {...common}><path d="m12 2 8 4.5v9L12 22l-8-6.5v-9L12 2Z"/><path d="m4 6.5 8 4.5 8-4.5M12 11v11"/></svg>;
  if(type==='search') return <svg {...common}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>;
  if(type==='database') return <svg {...common}><ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg>;
  if(type==='link') return <svg {...common}><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.2 1.2"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.2-1.2"/></svg>;
  if(type==='gear') return <svg {...common}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1-2.9 2.9-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21H10v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1-2.9-2.9.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3v-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1 2.9-2.9.1.1a1.6 1.6 0 0 0 1.8.3 1.6 1.6 0 0 0 1-1.5V3h4v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1 2.9 2.9-.1.1a1.6 1.6 0 0 0-.3 1.8 1.6 1.6 0 0 0 1.5 1h.1v4h-.1a1.6 1.6 0 0 0-1.5 1Z"/></svg>;
  if(type==='spark') return <svg {...common}><path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3ZM5 15l.8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15ZM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z"/></svg>;
  return <svg {...common}><circle cx="12" cy="12" r="9"/></svg>;
}

export function ProductMark({product,compact=false}:{product:ProductKey;compact?:boolean}){
  const p=productInfo[product];
  return <div className={`productMark ${compact?'compact':''}`}>
    <div className="miniSymbol">EZ</div>
    <span className="markDivider"/>
    <span className="featureIcon"><Icon type={p.icon}/></span>
    <span className="productType"><b><i>EZ</i>Haru</b><small>{p.name}</small></span>
  </div>
}

export function PageHero({eyebrow,title,copy,children}:{eyebrow:string;title:string;copy:string;children?:React.ReactNode}){
  return <section className="pageHero"><div className="shell narrow"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{copy}</p>{children}</div></section>
}

export function CTA(){return <section className="section ctaSection"><div className="shell ctaPanel"><div><div className="eyebrow">START SMALL</div><h2>See what would make the biggest difference.</h2><p>Start with a focused operational review. No oversized transformation program. Just a clear view of the work, the friction and the next practical steps.</p></div><Link className="btn" href="/contact">Request a Review →</Link></div></section>}
