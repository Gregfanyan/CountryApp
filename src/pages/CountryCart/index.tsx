import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Icon, Button, Card } from 'semantic-ui-react'

import { AppState } from '../../types/CountryType'
import CartItem from '../../components/CartItem'

function CountryCart() {
    const cartCountry = useSelector((state: AppState) => state.countries.inCart)
    const history = useHistory()

    function handleClick() {
        if (!history) {
            return <div>No country</div>
        } else {
            history.push('/')
        }
    }

    return (
        <div>
            <Button primary onClick={handleClick}>
                <Icon name="home"> </Icon>
                Home
            </Button>
            {cartCountry.length > 0 ? (
                <>
                    <Card.Content></Card.Content>
                    {cartCountry &&
                        cartCountry.map((cart, index) => {
                            return <CartItem key={index} cart={cart} />
                        })}
                </>
            ) : (
                <div>cart is empty</div>
            )}
        </div>
    )
}

export default CountryCart
