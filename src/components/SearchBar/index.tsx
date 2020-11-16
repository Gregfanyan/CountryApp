import React from 'react'
import { Menu, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { AppState } from '../../types/ProductType'

import { SearchBarProps } from '../../types'

import './SearchBar.scss'

export default function Searchbar({ handleChange, search }: SearchBarProps) {
    const counter = useSelector((state: AppState) => state.products.counter)

    return (
        <div className="SearchBar">
            <input
                className="input"
                type="text"
                placeholder="search country ..."
                value={search}
                onChange={handleChange}
            />
            <Menu.Item as={Link} to="cart">
                <Button color="black">
                    <Icon name="shopping cart">
                        <div>{counter}</div>
                    </Icon>
                </Button>
            </Menu.Item>
        </div>
    )
}
