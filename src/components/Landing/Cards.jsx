import { useState } from "react";
import { AiOutlineHeart, AiOutlineDownload, AiOutlineShareAlt, AiOutlineClose} from 'react-icons/ai';
import { RWebShare } from "react-web-share";

export const Modal = ({ image, onClose }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };
  
  const handleDownloadClick = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', image, true);
    xhr.responseType = 'blob';
    xhr.onload = () => {
      if (xhr.status === 200) {
        const blob = new Blob([xhr.response], { type: xhr.getResponseHeader('Content-Type') });
        const url = window.URL.createObjectURL(blob);
        const img = document.createElement('a');
        img.href = url;
        img.download = `${image}.jpg`; 
        img.click();
        window.URL.revokeObjectURL(url);
      }
    };
    xhr.send();
  };


  return (
    <div className="fixed z-10 top-0 left-0 w-full h-full flex items-center justify-center  backdrop-blur-sm backdrop-grayscale">
      <div className="absolute z-20 top-0 left-0 w-auto h-auto mx-10 my-10"></div>
      <div className="z-30 max-w-xl max-h-md p-4 bg-[#fff] m-10 border-slate-700 border-2 my-6">
        <div className="flex flex-row items-end justify-between my-4">
        <button
          className="btn-ghost btn-accent text-[#5a5454] text-3xl"
          onClick={onClose}
        >
        <AiOutlineClose/>
        </button>
        <button className="like-button" onClick={handleLikeClick}>
          <AiOutlineHeart
            className={`heart-icon text-3xl ${liked ? "liked" : ""}`}
          />
        </button>
      <RWebShare
        data={{
          text:`Mira esta imagen de ViewFinder`,
          url:`${image}`,
          title:'imagen de viewFinder'
        }}
        onClick={() => console.log("shared successfully!")}
        >
        <button> <AiOutlineShareAlt className="text-3xl  text-[#5a5454] text-end" /></button>
      </RWebShare>
            <button onClick={handleDownloadClick} className=" text-3xl  text-[#5a5454]">
              <AiOutlineDownload/>
            </button>
            </div>
        <div>
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
