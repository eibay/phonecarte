import React from 'react'
import {Grid, Container} from 'semantic-ui-react'
import Data from './data/data.json'
import Phones from './container/Phones'
import Cart from './component/Cart'

class App extends React.Component{

    state = {
        cart: [],
        data: [],
    }
    componentDidMount = () => {
        this.loadData()
    }

    loadData = () => {
        const data = Data.filter(phone => phone.isPublished === 'true')
        this.setState({data})
    }

    addToCart = (item) => {
        this.setState({cart: [...this.state.cart, item]})
        this.removeItem(item)
    }

    removeFromCart = item => {
        const cart = this.state.cart.filter(phone => phone !== item)
        this.setState({cart})
        this.addItem(item)
    }
    
    addItem = (item) => {
        const phone = Data.filter(phone => phone.productName === item)
        this.setState({data: [...this.state.data, phone[0]]})
    }

    removeItem = (item) => {
        this.setState({data: this.state.data.filter(phone => phone.productName !== item)})
    }

    render(){
        const data = Data.filter(phone => phone.isPublished === 'true')
        const{cart} = this.state
        const phoneProps = {
            ...data,
            ...this.state,
            addToCart: this.addToCart,
            removeFromCart: this.removeFromCart,
        }
        return(
            <>
            <Container>
                <Grid stackable divided> 
                    <Grid.Row columns={2}>
                        <Grid.Column textAlign='center' width={13}>
                            <h1>Product List</h1>
                            <Grid.Row>
                                <Phones {...phoneProps} />
                            </Grid.Row>
                        </Grid.Column>

                        <Grid.Column textAlign='center' width={3}>
                            <h1>Shopping Cart</h1>
                            <Container textAlign='left'>
                                {cart.map((item) => {
                                    return <div key={item} >
                                        <Cart
                                            item={item}
                                            removeFromCart={this.removeFromCart} 
                                        />
                                    </div>
                                    }
                                )}
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
            </>
        )
    }
}

export default App