
import example1 from '../../public/example1.jpg'
import example2 from '../../public/example2.jpg'
import example3 from '../../public/example3.jpg'
import example4 from '../../public/example4.jpg'

import { Next } from './icons/next'
import Tailwind from './icons/tailwind'
import Firebase from './icons/firebases'
import Preact from './icons/preact'
const Card = ()=>{
  const TAGS = {
    NEXT: {
      name: 'Next.js',
      className: 'bg-black text-white',
      icon: Next,
    },
    TAILWIND: {
      name: 'Tailwind CSS',
      className: 'bg-[#003159]',
      icon: Tailwind,
    },
    PREACT: {
      name: 'Preact.js',
      className: 'bg-[#673ab8]',
      icon: Preact,
    },
    FIREBASE: {
      name: 'Firebase',
      className: 'bg-[#232323]',
      icon: Firebase,
    },
  };


    const imagesProyect = [
        {
          src: example1.src,
          alt: 'example1',
          title:'Wartix E-comerce Personal',
          description:'Creado desde cero con Next.js,Firebase y Tailwind CSS.',
          tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.FIREBASE]
         
        },
        {
          src: example2.src,
          alt: 'example2'
        },
        {
          src: example3.src,
          alt: 'example3'
        },
        {
          src: example4.src,
          alt: 'example4'
        }
      ];
    
      
    return(
      
        <section className=" w-full flex flex-col gap-[50px]">
        {imagesProyect.map(({ src, title, description, tags,alt}, i) => (
          <article>
            <header>
              <h2>
                {title}
              </h2>
              <p>
                {description}
              </p>
              <ul className='flex items-center gap-[10px]'>
              {tags && tags.map((tag, j) => (
  <li key={j} className='shrink-0 snap-start mt-[10px] mb-[10px]'>
   {<tag.icon/>}
  </li>
))}
              </ul>
            </header>
          <figure key={i}  className='cursor-pointer'>
            <img className="w-[800px] h-[450px] rounded-[5px]"  src={src} alt={alt} />
          </figure>
          </article>
        ))}
        </section>
        
    )
}
export default Card
