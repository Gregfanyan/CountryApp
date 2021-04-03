import React from 'react'
import { useDispatch } from 'react-redux'
import { Card, Image, Button } from 'semantic-ui-react'

import { removeCountry } from '../../redux'
import './CartItem.scss'

const CardStyle = { display: 'inline-block', marginRight: '10px' }

function CartItem({ cart }: any) {
    const { name, flag, population, region, languages } = cart
    const language = languages[0]
    const dispatch = useDispatch()

    const handleRemoveCountry = () => {
        dispatch(removeCountry(cart))
    }
    return (
        <Card style={CardStyle} stackable>
            <Image src={flag} alt="countries" wrapped ui={false} size="small" />
            <Card.Content textAlign="center">
                <Card.Header>{name}</Card.Header>
                <Card.Description>{region}</Card.Description>
            </Card.Content>
            <Card.Content extra textAlign="center">
                population: {population}
            </Card.Content>
            <Card.Content extra textAlign="center">
                language:
                {language.name}
            </Card.Content>
            <Card.Content extra>
                <div className="ui two buttons">
                    <Button color="red" onClick={handleRemoveCountry}>
                        remove
                    </Button>
                </div>
            </Card.Content>
        </Card>
    )
}

export default CartItem
