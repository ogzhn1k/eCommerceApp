import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../../api';
import { Box, Text, Button } from "@chakra-ui/react";
import ImageGallery from 'react-image-gallery';

function ProductDetail() {
    const { product_id } = useParams();

    const { isLoading, error, data } = useQuery(['product', product_id], () => getProductDetail(product_id));

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;

    // console.log(data);
    console.log(process.env.REACT_APP_BASE_ENDPOINT)

    const images = [
        {
            original: `https://picsum.photos/id/${product_id}/200/300`,
            thumbnail: `https://picsum.photos/id/${product_id}/200/300`,
        },
        {
            original: `https://picsum.photos/seed/picsum/200/300`,
            thumbnail: `https://picsum.photos/seed/picsum/200/300`,
        },
        {
            original: `https://picsum.photos/200/300?random=1`,
            thumbnail: `https://picsum.photos/200/300?random=1`,
        },
    ];

    return (
        <div>
            <Button colorScheme="pink" variant='outline'>Add to Basket</Button>

            <Text as="h2" fontSize="2xl">
                {data.productName}
            </Text>
            <Text>
                {data.quantityPerUnit}
            </Text>
            <p>Last {data.unitsInStock} product</p>
            <Box margin="10">
                <ImageGallery items={images} />
            </Box>
        </div>
    )
}

export default ProductDetail