import { useState, useRef } from "react";
import { accessKey } from "../../service/apiUnplash";
import axios from "axios";
import ImageList from "./Image";
import Categories from "./Categories";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [imagesUrl, setImagesUrl] = useState([]);
  const [ search, setSearch ] = useState(false);
  const imageListRef = useRef(null); 


  const getImagesByTag = async(tag) => {
    return await axios
      .get(
        `https://api.unsplash.com/photos/random?&fit&count=18&query=${tag}&client_id=${accessKey}`
      )
      .then((res) => {
        if (res.data && res.data.length > 0) {
          return res.data.map((image) => image.urls.regular);
        }
        return [];
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    const imagesUrl = await getImagesByTag(searchTerm);
    setImagesUrl(imagesUrl);
    setSearch(true);
    imageListRef.current.scrollIntoView({ behavior: 'smooth'}); 
  };

  const handleClear = (event) =>{
    event.preventDefault();
    setSearchTerm("");
    setImagesUrl([]);
    setCategory("");
    setSearch(false);
  };


  return (
    <>
      <div
        className="hero min-h-screen  "
        style={{
          backgroundImage: `url("https://source.unsplash.com/random/?montain") `,
        }}
      >
        <div className="hero-overlay bg-opacity-20 bg-gray-dark "></div>
        <div className="hero-content text-center ">
          <div className="max-w-md">
            <h1 className="mb-5 text-8xl font-bold text-[#ffff]">HOLA!</h1>
            <p className="mb-5 text-xl text-[#ffff]">
              Bienvenido al mejor buscador de imagenes...
            </p>
            <form onSubmit={handleSearchSubmit}>
              <label className="relative block ">
                <span className="sr-only  ">Buscar</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 pr-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </span>
                <input
                  className="placeholder:text-slate-800 block bg-white w-full border 
            border-slate-300 rounded-md py-2 pl-10 pr-3 shadow-sm focus:outline-none 
            focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-2xl text-gray-dark"
                  placeholder="Buscar imagen..."
                  type="text"
                  name="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </label>
              <button type="submit" className="btn m-5 btn-lg text-[#fff]">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center w-30 mt-10">
          <form onSubmit={handleSearchSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="search"
                placeholder="Buscar imagenes…"
                className="input input-bordered focus:border-black text-3xl text-gray-dark"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-square" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              {search && (
              <button className='btn' onClick={ handleClear}>limpiar</button>
              )}
            </div>
          </form>
        </div>
      </div>
      <div> 
        <Categories />
        <div ref={imageListRef}>
        <ImageList  images={imagesUrl} />
        </div>
      </div>
    </>
  );
};

export default Hero;
