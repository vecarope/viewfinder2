import { useState } from "react";
import { Modal } from "./Cards";


const ImageList = ({ images }) => {

  const [modalImage, setModalImage ] = useState(null)
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = (images) => {
    setModalImage(images);
    setShowModal(true);
  };

  const handleCloseModal = () =>{
    setModalImage(null);
    setShowModal(false);
  };
      
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 mx-8">
      {images.map((image, key) => (
        <img
          key={key}
          src={image}
          alt={image.description}
          className="mb-4"
          onClick={()=> handleImageClick(image)}
        />
      ))}
      {modalImage && <Modal image={modalImage} onClose={handleCloseModal}/>}
      {console.log('modal', modalImage )}
    </div>
  );
};

export default ImageList;
