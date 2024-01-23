// Carousel.js
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
const Carousel = ({ children }) => {
  const autoplayOptions = {
    delay: 1000,
    rootNode: (emblaRoot) => emblaRoot.parentElement
  }
  
  
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])


  
  return (
    <div className='overflow-hidden' ref={emblaRef}>
      <div className='flex items-center gap-2'>{children}</div>
    </div>
  );
};

export default Carousel;