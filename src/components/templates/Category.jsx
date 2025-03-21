import Image from "next/image";

const images = [
  '/assets/5.webp',
   '/assets/6.webp',
   '/assets/7.webp',
   '/assets/8.webp',
   '/assets/9.webp',
   '/assets/10.webp'
];
const captions = [
    "پاور بانک",
    "تبلت",
    "ساعت هوشمند",
    "اسپیکر",
    "موبایل",
    "گیمینگ",
];

const Category = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center flex-wrap gap-10">
      {images.map((image , index) => (
        <div key={index} className="w-auto h-auto flex flex-col justify-center items-center gap-2">
          <div className="w-32 h-32 border-2 border-[#FBCB07] rounded-full p-2 relative overflow-hidden">
            <div className="group w-full h-full transition-transform transform origin-center scale-100  hover:scale-110">
              <Image
              src={image}
              alt={'Category Picture'}
              width={1000}
              height={1000}
              loading="lazy"
              />
            </div>
          </div>
            <p className="mt-2 text-center text-[#C3C4C5] text-xs font-Sans hover:text-[#FBCB07]">
              {captions[index]}
            </p>
        </div>
      ))}
    </div>
  );
}

export default Category;