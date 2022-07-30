import axios from 'axios'

export const getProductList = async() => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/api/products/getAllByPage?pageNo=1&pageSize=12`).then(res => res.data);

    return data;
}

export const getProductDetail = async(product_id) => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/api/products/getByProductId?productId=${product_id}`).then(res => res.data);
    return data;
}

export const registrateUser = async(input) => {
    console.log(`${process.env.REACT_APP_BASE_ENDPOINT}/api/users/add`+input);
    const {data} = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/api/users/add`,input);

    return data;
}