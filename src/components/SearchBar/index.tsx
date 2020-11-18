import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { AppState } from '../../types/CountryType'

import { SearchBarProps } from '../../types/ui'

import './SearchBar.scss'

export default function Searchbar({ handleChange, search }: SearchBarProps) {
    const counter = useSelector((state: AppState) => state.countries.counter)

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
                <Icon name="shopping cart" className="cart" size="big">
                    <div className="counter">{counter}</div>
                </Icon>
            </Menu.Item>
        </div>
    )
}
