import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import { Card, Image, Button } from 'semantic-ui-react'

import { removeCountry } from '../../redux'
import { Country } from '../../types/CountryType'
import './CartItem.scss'

const CardStyle = { display: 'inline-block', marginRight: '10px' }

const CartItem: FunctionComponent<{ cart: Country }> = ({ cart }) => {
    const { name, flags, population, region, languages } = cart
    const dispatch = useDispatch()

    const handleRemoveCountry = () => {
        dispatch(removeCountry(cart))
    }
    return (
        <Card style={CardStyle} stackable>
            <Image
                src={flags.png}
                alt="countries"
                wrapped
                ui={false}
                size="small"
            />
            <Card.Content textAlign="center">
                <Card.Header>{name.official}</Card.Header>
                <Card.Description>{region}</Card.Description>
            </Card.Content>
            <Card.Content extra textAlign="center">
                population: {population}
            </Card.Content>
            <Card.Content extra textAlign="center">
                language:
                {Object.values(languages)[0]}
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
