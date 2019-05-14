import React from 'react'
import {Card, Image, Container, Button} from 'semantic-ui-react'

const Phone = (props) => {
    const price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'AUD' }).format(props.price)
    return(
        <>
        <Card>
            <Card.Content textAlign='center'>
                <Card.Header>{props.productName}</Card.Header>
                <Container><Image src={props.productImage} alt={`${props.productName} photo`}/></Container>
                <Card.Meta><h3>{price}</h3></Card.Meta>
                <Button onClick={() => props.addToCart(props.productName)}>Add To Cart</Button>
            </Card.Content>
        </Card>
        </>
    )
}

export default Phone