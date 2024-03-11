import api from './apiConfig.js'

export const getQuotes = async () => {
    try { 
    const response = await api.get('/quotes');
    return response.data;
} catch (error) {
    console.error('Error Getting all Quotes: ', error);
}
};

export const getQuote = async (id) => {
    try { 
    const response = await api.get(`/quotes/${id}`);
    return response.data;
} catch (error) {
    console.error('Error finding quote: ', error);
}
};