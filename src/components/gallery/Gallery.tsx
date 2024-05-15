import { useState } from 'react';
import GalleryDataFood from '../../data/GalleryDataFood';
import GalleryDataLandscapes from '../../data/GalleryDataLandscapes';
import GalleryDataMacro from '../../data/GalleryDataMacro';
import GalleryDataPortrait from '../../data/GalleryDataPortrait';
import GalleryDataEvent from '../../data/GalleryDataEvents';
import GalleryDataCar from '../../data/GalleryDataCars';

import Images from './Images';
import 'react-slideshow-image/dist/styles.css';

interface Image {
  src: string;  // Supongamos que cada imagen tiene al menos una propiedad 'src'
}

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<Image[]>([]);
  const [targetImg, setTargetImg] = useState(0);
  const [modalStyle, setModalStyle] = useState<React.CSSProperties>({});

  const handleNextClick = () => {
    setTargetImg(prevImg => (prevImg + 1) % currentImages.length);
  };

  const handlePrevClick = () => {
    setTargetImg(prevImg => (prevImg - 1 + currentImages.length) % currentImages.length);
  };

  const openModal = (images: Image[]) => {
    setCurrentImages(images);
    setIsOpen(true);
    setTargetImg(0);
    adjustModalStyle(images[0]);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const setModalImg = (imgIndex: number) => {
    setTargetImg(imgIndex);
    setIsOpen(true);
    adjustModalStyle(currentImages[imgIndex]);
  };

  const adjustModalStyle = (image: Image) => {
    const img = new Image();
    img.src = image.src;
    img.onload = () => {
      const heightRatio = img.naturalHeight / img.naturalWidth;
      const modalHeight = `calc(80vw * ${heightRatio})`;
      setModalStyle({
        width: '80vw',
        height: modalHeight,
        maxHeight: '80vh', // Ensures that very tall images do not overflow the screen vertically
        maxWidth: '100%' // Ensures that very wide images do not overflow the screen horizontally
      });
    };
  };

  return (
    <article className="sm:col-span-5 md:col-span-4 min-h-screen scrollbar-hide" style={{ paddingTop: '0vh' }}>
      <div className="flex flex-col items-center w-full xs:grid xs:grid-cols-3 xs:gap-4">
        <div className="cursor-pointer" onClick={() => openModal(GalleryDataFood)}>
          <Images imagesToShow={[GalleryDataFood[0]]} toggle={() => setModalImg(0)} setModalImg={() => setModalImg(0)} />
          <div style={{ display: 'flex', alignItems: 'center', height: '20px' }}>
            <div className=" font-namefont text-5xl" style={{ fontSize: '30px', paddingLeft: '70px' }}>GASTRONOMIA</div>
          </div>
        </div>
        <div className="cursor-pointer" onClick={() => openModal(GalleryDataLandscapes)}>
          <Images imagesToShow={[GalleryDataLandscapes[0]]} toggle={() => setModalImg(0)} setModalImg={() => setModalImg(0)} />
          <div style={{ display: 'flex', alignItems: 'center', height: '20px' }}>
            <div className=" font-namefont text-5xl" style={{ fontSize: '30px', paddingLeft: '90px'}}>MASCOTAS</div>
          </div>
        </div>
        <div className="cursor-pointer" onClick={() => openModal(GalleryDataMacro)}>
          <Images imagesToShow={[GalleryDataMacro[0]]} toggle={() => setModalImg(0)} setModalImg={() => setModalImg(0)} />
          <div style={{ display: 'flex', alignItems: 'center', height: '20px' }}>
            <div className=" font-namefont text-5xl" style={{ fontSize: '30px', paddingLeft: '110px'}}>MACRO</div>
          </div>
        </div>
        <div className="cursor-pointer" onClick={() => openModal(GalleryDataPortrait)}>
          <Images imagesToShow={[GalleryDataPortrait[0]]} toggle={() => setModalImg(0)} setModalImg={() => setModalImg(0)} />
          <div style={{ display: 'flex', alignItems: 'center', height: '20px' }}>
            <div className=" font-namefont text-5xl" style={{ fontSize: '30px', paddingLeft: '105px'}}>RETRATO</div>
          </div>
        </div>
        <div className="cursor-pointer" onClick={() => openModal(GalleryDataEvent)}>
          <Images imagesToShow={[GalleryDataEvent[0]]} toggle={() => setModalImg(0)} setModalImg={() => setModalImg(0)} />
          <div style={{ display: 'flex', alignItems: 'center', height: '20px' }}>
            <div className=" font-namefont text-5xl" style={{ fontSize: '30px', paddingLeft: '100px'}}>EVENTOS</div>
          </div>
        </div>
        <div className="cursor-pointer" onClick={() => openModal(GalleryDataCar)}>
          <Images imagesToShow={[GalleryDataCar[0]]} toggle={() => setModalImg(0)} setModalImg={() => setModalImg(0)} />
          <div style={{ display: 'flex', alignItems: 'center', height: '20px' }}>
            <div className=" font-namefont text-5xl" style={{ fontSize: '30px', paddingLeft: '120px'}}>AUTOS</div>
          </div>
        </div>
      </div>


      {isOpen && (
        <section className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-75" >
          <button onClick={closeModal} className="absolute flex items-center justify-center z-40 text-2xl text-gray-200 text-bold p-2 bg-black rounded-full w-10 h-10 right-4 top-4 hover:-rotate-90 transition duration-500">
            X
          </button>
          <button onClick={handlePrevClick} className="absolute flex items-center justify-center z-40 left-8 top-1/2 text-xl text-gray-200 text-bold p-5 bg-black rounded-full w-10 h-10 hover:bg-opacity-75 transition">
            &lt;
          </button>
          <div className="slider-container relative flex items-center justify-center" style={modalStyle}>
            <img className="slider-slide object-contain w-full h-full" src={currentImages[targetImg].src} alt="" />
          </div>
          <button onClick={handleNextClick} className="absolute z-40 flex items-center justify-center right-8 top-1/2 text-xl text-gray-200 text-bold p-6 bg-black rounded-full w-10 h-10 hover:bg-opacity-75 transition">
            &gt;
          </button>
        </section>
      )}
    </article>
  );
};

export default Gallery;
