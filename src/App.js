import React from 'react'
import {Grid, Container} from 'semantic-ui-react'
import Data from './data/data.json'
import Phones from './container/Phones'

class App extends React.Component{
    render(){
        return(
            <>
            <Container>
                <Grid stackable> 
                    <Grid.Row columns={2}>
                            <Grid.Column>
                                <h1>Product List</h1>
                                <Grid.Row>
                                    <Phones data={Data} />
                                </Grid.Row>
                            </Grid.Column>
                            <Grid.Column>
                                <h1>Shopping Cart</h1>
                                <h4>Items</h4>
                                <h4>Items</h4>
                                <h4>Items</h4>
                                <h4>Items</h4>
                            </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
            </>
        )
    }
}

export default App