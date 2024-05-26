'use client'
import Image from 'next/image';
import { useState } from 'react';

const images = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/23719481/pexels-photo-23719481/free-photo-of-chrysanthemum-flower.jpeg'
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/24304598/pexels-photo-24304598/free-photo-of-passersby-between-the-colonnades-of-the-arcade.jpeg'
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/23891704/pexels-photo-23891704/free-photo-of-metro-train-in-chicago-in-black-and-white.jpeg'
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/15475218/pexels-photo-15475218/free-photo-of-hill-on-coast-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
]

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img, i) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;