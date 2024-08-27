import axios from "axios";

export const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCT_REQUEST';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE';

export const fetchApi = () => async (dispatch) => {
    dispatch({ type: FETCH_PRODUCT_REQUEST });
    try {
        const response = await axios.get('http://localhost:8000/api/products');
        dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: response.data });
    }
    catch (error) {
        dispatch({ type: FETCH_PRODUCT_FAILURE, payload: error.message });
    }
};
