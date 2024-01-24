import example1 from '../../public/example1.jpg'
import example2 from '../../public/example2.jpg'
import example3 from '../../public/example3.jpg'
import example4 from '../../public/example4.jpg'
import TagsIcons from './ui/tags'
import { Next } from './icons/next'
import Tailwind from './icons/tailwind'
import Firebase from './icons/firebases'
import Preact from './icons/preact'
import Carousel from './ui/carusel'

import Button from './ui/butons'
import GitHub from './icons/gitHub'

const Card = () => {
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
  }

  const imagesProyect = [
    {
      src: example1.src,
      alt: 'example1',
      title: 'Wartix E-comerce Personal',
      description: 'Creado desde cero con Next.js,Firebase y Tailwind CSS.',
      tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.FIREBASE],
      href: 'https://github.com/santiagoRicops/wartrix',
    },
    {
      src: example2.src,
      alt: 'example2',
    },
    {
      src: example3.src,
      alt: 'example3',
    },
    {
      src: example4.src,
      alt: 'example4',
    },
  ]

  return (
    <>
      {imagesProyect.map(({ src, title, description, tags, alt, href }, i) => (
        <article className="relative ">
          <header>
            <h2 className="text-[20px] font-medium text-[#FFE071]">{title}</h2>
            <p className="xl:w-[800px] lg:w-[700px] md:w-[600px] w-[300px]">
              {description}
            </p>
            <ul className="flex items-center overflow-hidden xl:w-[800px] lg:w-[700px] md:w-[600px] w-[300px] ">
              <Carousel>
                {tags &&
                  tags.map((tag, j) => (
                    <li
                      key={j}
                      className="shrink-0 snap-start mt-[10px] mb-[10px]"
                    >
                      <TagsIcons className={tag.className}>
                        {<tag.icon />}
                        {tag.name}
                      </TagsIcons>
                    </li>
                  ))}
              </Carousel>
            </ul>
          </header>
          <figure key={i} className="cursor-pointer">
            <img
              className="xl:w-[800px] lg:w-[700px] md:w-[600px] w-[300px] xl:h-[450px] lg:h-[450px] md:h-[350px] h-[250px] rounded-[5px]"
              src={src}
              alt={alt}
            />
          </figure>
          <Button>
            <a href={href}>
              <GitHub />
              Ver código fuente
            </a>
          </Button>
        </article>
      ))}
    </>
  )
}
export default Card
