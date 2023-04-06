

export const Modal = ({ image, onClose }) => {
  return (
    <div className="fixed z-10 top-0 left-0 w-full h-full flex items-center justify-center  backdrop-blur-sm backdrop-grayscale">
    <div className="absolute z-20 top-0 left-0 w-full h-full  "></div>
    <div className="z-30 max-w-md w-full p-2 bg-[#fff] m-10 border-slate-700 border-2">
    <button className="mt-4 btn btn-ghost btn-accent text-gray-dark" onClick={onClose}>X</button>
      <img className="mb-4 w-full h-full" src={image.regular} alt={image.description} />
      <p className="bg-white text-base-200 m-8">{image.description}</p>
    </div>
    </div>
  );
};

