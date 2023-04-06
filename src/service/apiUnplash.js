import axios from "axios";

export const accessKey= '7a4kR5poyus63pMcekuxFEy-EPptcQ1PcTBjel8MqSA'

export const getPhotosByQuery = async (query) => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`,
      {timeout: 1000 }
    );
    return response.data.results;
  } catch (err) {
    if(axios.isAxiosError(err)){
      if(err.code === 'ECONNABORTED'){
        throw new Error('La solicitud tardo demaciado en responder');
      }else {
        throw new Error('Lo siento no se pudieron cargar las fotos')
      }
    } else {
      throw err; 
    }
  }
};
