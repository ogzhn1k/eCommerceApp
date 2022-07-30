import React from 'react'
import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

function Card({item}) {

    let randValueforImage = Math.floor(Math.random() * 100);

    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
            <Link to={`/product/${item.id}`}>
                <Image src={`https://picsum.photos/200/300?random=${randValueforImage}`} alt="product" loading='lazy'/>

                <Box p="6">
                    <Box display='flex' alignItems='baseline'>
                        {item.category.categoryName}
                    </Box>
                    <Box mt="1" fontWeight='semibold' as='h4' lineHeight='tight'>
                        {item.productName}
                    </Box>
                    <Box>{item.unitPrice} TL</Box>
                </Box>
            </Link>
            <Button colorScheme='pink' variant='outline'>Add to Basket</Button>

        </Box>
    )
}

export default Card