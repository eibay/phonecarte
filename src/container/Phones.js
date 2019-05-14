import React from 'react'
import Phone from '../component/Phone'
import {Card} from 'semantic-ui-react'

class Phones extends React.Component{

    render(){
        const data = this.props.data.filter(phone => phone.isPublished === 'true')
        return(
            <div>
                <Card.Group stackable doubling itemsPerRow={3}>
                    {data.map((phone, index) => 
                        <Phone {...phone} key={index}/>
                    )}
                </Card.Group>
            </div>
        )
    }
}

export default Phones