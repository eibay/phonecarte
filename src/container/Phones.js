import React from 'react'
import Phone from '../component/Phone'
import {Card} from 'semantic-ui-react'

class Phones extends React.Component{

    render(){
        return(
            <div>
                <Card.Group stackable doubling itemsPerRow={3}>
                    {this.props.data.map((phone, index) => 
                        <Phone {...phone} key={index} {...this.props}/>
                    )}
                </Card.Group>
            </div>
        )
    }
}

export default Phones