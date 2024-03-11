import api from './apiConfig.js'

export const getCharacters = async () => {
    try { 
    const response = await api.get('/characters');
    return response.data;
} catch (error) {
    console.error('Error Getting all Characters: ', error);
}
};

export const getCharacter = async (id) => {
    try { 
    const response = await api.get(`/characters/${id}`);
    return response.data;
} catch (error) {
    console.error('Error finding Character: ', error);
}
};

export const createCharacter = async (catData) => {
        try { 
        const response = await api.post('/characters', catData);
        return response.data;
    } catch (error) {
        console.error('Error creating character:', error);
    }
    };


    export const editCharacter = async (id, characterData) => {
        try { 
        const response = await api.put(`/characters/${id}`, characterData);
        return response.data;
    } catch (error) {
        console.error('Error editing character: ', error);
    }
    };

    export const deleteCharacter = async (id) => {
        try { 
        const response = await api.delete(`/characters${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting character: ', error);
    }
    };

