import { useState } from "react";
import { getPhotosByQuery } from "../../service/apiUnplash";
import { options } from "../../data/data";

const Categories = () => {
  const [images, setImages] = useState([]);
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [ selectedCategory, setSelectedCategory ] = useState('');


  const handleButtonClick = (category) => {
    if (selectedButtons.includes(category)) {
      setSelectedButtons(selectedButtons.filter((button) => button !== category))
      setSelectedCategory("");
      getImages(selectedButtons.filter((button)=> button !== category))
    } else {
      setSelectedButtons([...selectedButtons, category]);
      setSelectedCategory(category);
      getImages([...selectedButtons, category]);
    }
  };

  const getImages = (selectedButtons) => {
    if(selectedButtons.length === 0 ) {
      setImages([]);
      return; 
    }else{
    getPhotosByQuery(selectedButtons).then((results) => {
      setImages(results);
      console.log(results);
    })}
  };



  return (
    <>
      <div className="grid grid-rows-1 grid-flow-col mx-20 my-10">
        <div>
          {options.map(({ category, key }) => (
            <button
              key={category}
              className={selectedCategory === category ? "btn btn-outline btn-accent btn-active m-5" : "btn btn-outline m-3  btn-accent "}
              onClick={() => handleButtonClick(category)}
            >
              {console.log(selectedCategory)}
              {key}
            </button>
          ))}
        </div>
      </div>
      <div className="columns-2 md:columns-3 lg:columns-4 mx-8 mb-10">
        {images.map((image) => (
          <img
            className="mb-4"
            key={image.id}
            src={image.urls.regular}
            alt={image.description}
          />
        ))}
      </div>
    </>
  );
};

export default Categories;
