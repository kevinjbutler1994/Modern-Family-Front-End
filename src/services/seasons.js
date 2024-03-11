import api from './apiConfig.js'

export const getSeasons = async () => {
    try { 
    const response = await api.get('/seasons');
    return response.data;
} catch (error) {
    console.error('Error Getting all Seasons: ', error);
}
};

export const getSeason = async (id) => {
    try { 
    const response = await api.get(`/seasons/${id}`);
    return response.data;
} catch (error) {
    console.error('Error finding season: ', error);
}
};