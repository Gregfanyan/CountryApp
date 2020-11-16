import React from 'react'
import { useDispatch } from 'react-redux'
import { Card, Image, Button } from 'semantic-ui-react'

import { CartItemProps } from '../../types/ui'
import { removeProduct } from '../../redux'

function CartItem({ cart }: CartItemProps) {
    const { name, flag, population, region, languages } = cart

    const dispatch = useDispatch()

    const handleRemoveProd = () => {
        dispatch(removeProduct(cart))
    }
    return (
        <Card.Group itemsPerRow={4} centered>
            <Card>
                <Image
                    src={flag}
                    alt="product"
                    wrapped
                    ui={false}
                    size="small"
                />
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Description>{region}</Card.Description>
                </Card.Content>
                <Card.Content extra>population: {population}</Card.Content>
                <Card.Content extra>
                    languages:{' '}
                    {languages &&
                        languages.map((lang: any, index) => (
                            <div key={index}>
                                {lang.name}
                                <br />
                            </div>
                        ))}
                </Card.Content>
                <Card.Content extra>
                    <div className="ui two buttons">
                        <Button color="red" onClick={handleRemoveProd}>
                            remove
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        </Card.Group>
    )
}

export default CartItem
