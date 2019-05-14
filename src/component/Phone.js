import React from 'react'
import {Card, Image, Container, Button} from 'semantic-ui-react'

const Phone = (props) => {
    return(
        <>
        <Card>
            <Card.Content textAlign='center'>
                <Card.Header>{props.productName}</Card.Header>
                <Container><Image src={props.productImage}/></Container>
                <Card.Meta>{props.price}</Card.Meta>
                <Button onClick={() => props.addToCart(props.productName)}>Add To Cart</Button>
            </Card.Content>
        </Card>
        </>
    )
}

export default Phone