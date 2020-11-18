import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Icon, Button, Card } from 'semantic-ui-react'

import { AppState } from '../../types/CountryType'
import CartItem from '../../components/CartItem'
import './CountryCart.scss'

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
        <div className="bgColor">
            <Card.Group itemsPerRow={4} centered style={{ margin: 0 }}>
                <Button primary onClick={handleClick}>
                    <Icon name="home"> </Icon>
                    Home
                </Button>
            </Card.Group>
            {cartCountry.length > 0 ? (
                <>
                    <Card.Content></Card.Content>
                    {cartCountry &&
                        cartCountry.map((cart, index) => {
                            return <CartItem key={index} cart={cart} />
                        })}
                </>
            ) : (
                <div className="infoText">cart is empty</div>
            )}
        </div>
    )
}

export default CountryCart
