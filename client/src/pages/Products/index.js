import React from 'react'
import Card from '../../components/Card'
import { Grid } from "@chakra-ui/react";
import { useQuery } from '@tanstack/react-query'
import { getProductList } from '../../api';

function Products() {
    const { isLoading, error, data } = useQuery(['products'], getProductList);

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;

    // console.log("data",data);

    return (
        <div>
            <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                {
                    data && data.length > 0 && data.map((item, key) => (
                        <Card key={key} item={item} />
                    ))}
            </Grid>
        </div>
    )
}

export default Products