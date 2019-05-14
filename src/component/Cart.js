import React from 'react'
import {Card, Icon, Button} from 'semantic-ui-react'

const Cart = (props) => {
    return(
    <Card>
        <Card.Content>
            <>
                <Button icon onClick={() => props.removeFromCart(props.item)}>
                    <Icon name='delete' />
                </Button>
                {props.item}  
            </>
        </Card.Content>
    </Card>
    )
}

export default Cart