import { useState } from "react";
import { AiOutlineHeart} from 'react-icons/ai';
import { FaShareAlt } from "react-icons/fa";
import { RWebShare } from "react-web-share";

export const Modal = ({ image, onClose }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="fixed z-10 top-0 left-0 w-full h-full flex items-center justify-center  backdrop-blur-sm backdrop-grayscale">
      <div className="absolute z-20 top-0 left-0 w-auto h-auto mx-10 my-10"></div>
      <div className="z-30 max-w-xl max-h-md p-4 bg-[#fff] m-10 border-slate-700 border-2 my-6">
        <button
          className="m-4 btn btn-ghost btn-accent text-gray-dark text-xl"
          onClick={onClose}
        >
          X
        </button>
        <button className="like-button" onClick={handleLikeClick}>
          <AiOutlineHeart
            className={`heart-icon text-xl ${liked ? "liked" : ""}`}
          />
        </button>
        <div>
      <RWebShare
        data={{
          text:`Mira esta imagen de ViewFinder`,
          url:`${image}`,
          title:'imagen de viewFinder'
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <button> <FaShareAlt className="text-xl text-end" /></button>
      </RWebShare>
    </div>
        <img
          className="mb-12 object-cover w-max h-max"
          src={image}
          alt={image.description}
        />
      </div>
    </div>
  );
};
