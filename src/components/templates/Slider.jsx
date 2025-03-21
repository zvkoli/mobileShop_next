import { Carousel } from 'antd';
import Image from 'next/image';

const contentStyle = {
  height: '320px',
  textAlign: 'center',
};

const Slider = () => (
  <Carousel autoplay className='w-full'>
    <div>
      <Image
      style={contentStyle}
      src={'/assets/1.webp'}
      alt="Slide 1"
      width={10000}
      height={1000}
      loading="lazy"
      />
    </div>
    <div>
      <Image
      style={contentStyle}
      src={'/assets/2.webp'}
      alt="Slide 2"
      width={10000}
      height={1000}
      loading="lazy"
      />
    </div>
    <div>
      <Image
      style={contentStyle}
      src={'/assets/1.webp'}
      alt="Slide 3"
      width={10000}
      height={1000}
      loading="lazy"
      />
    </div>
  </Carousel>
);

export default Slider;
