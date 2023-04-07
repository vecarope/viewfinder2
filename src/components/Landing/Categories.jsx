import { useState } from "react";
import { getPhotosByQuery } from "../../service/apiUnplash";
import { options } from "../../data/data";
import { Modal } from "./Cards";

const Categories = () => {
  const [images, setImages] = useState([]);
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [modalImage, setModalImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setModalImage(null);
    setShowModal(false);
  };

  const handleButtonClick = (category) => {
    if (selectedButtons.includes(category)) {
      setSelectedButtons(
        selectedButtons.filter((button) => button !== category)
      );
    } else {
      setSelectedButtons([...selectedButtons, category]);
    }
    getImages([...selectedButtons, category]);
  };

  const getImages = (selectedButtons) => {
    if (selectedButtons.length === 0) {
      setImages([]);
      return;
    } else {
      getPhotosByQuery(selectedButtons).then((results) => {
        setImages(results);
      });
    }
  };

  return (
    <>
      <div className="mt-10 mx-4 ">
        <p className="text-center text-2xl text-stone-900 ">
          Eljige la categoria que buscas, y si te animas puedes mezclarlas,
          <p> necesitas un retrato urbano? o animales con flora?,</p>{" "}
          intentalo!
        </p>
      </div>
      <div className="grid grid-rows-1 content-center justify-around mx-20 my-10">
        <div>
          {options.map(({ category, key }) => (
            <button
              key={category}
              className={`btn btn-outline m-3  btn-accent ${
                selectedButtons.includes(category) ? "btn-active" : ""
              }`}
              onClick={() => handleButtonClick(category)}
            >
              {key}
            </button>
          ))}
        </div>

        {selectedButtons.length > 0 && (
          <button
            className="btn btn-outline m-3  btn-accent"
            onClick={() => setImages([]) || setSelectedButtons([])}
          >
            Limpiar selección
          </button>
        )}
        </div>
      <div className="columns-2 md:columns-3 lg:columns-4 mx-8 mb-10">
        {images.map((image) => (
          <img
            className="mb-4"
            key={image.id}
            src={image.urls.regular}
            alt={image.description}
            onClick={() => handleImageClick(image)}
          />
        ))}
        {modalImage && (
          <Modal image={modalImage.urls.regular} onClose={handleCloseModal} />
        )}
      </div>
    </>
  );
};

export default Categories;
