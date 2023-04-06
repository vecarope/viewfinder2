const ImageList = ({ imagesUrl }) => {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 mx-8">
      {imagesUrl.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Image ${index}`} className='mb-4' />
      ))}
    </div>
  );
};

export default ImageList; 