import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Menu, Icon } from 'semantic-ui-react'

import Flag from '../Flag'
import { addCountry } from '../../redux'

import './tableRow.scss'
import { Country } from '../../types/CountryType'

const TableRow: FunctionComponent<{ countries: Country }> = ({ countries }) => {
    const dispatch = useDispatch()

    const handleAddCountry = () => {
        dispatch(addCountry(countries))
    }
    const { flags, name, languages, population, region } = countries

    return (
        <tr className="tableRow">
            <td>
                <Flag flags={flags} />
            </td>
            <td>
                <Link
                    to={`/TableRow/${name.official}`}
                    style={{ color: 'inherit', textDecoration: 'inherit' }}
                >
                    {name.official}
                </Link>
            </td>
            <td>
                {languages &&
                    Object.values(languages).map((lang: string) => (
                        <li key={lang}>{lang}</li>
                    ))}
            </td>
            <td>{population}</td>
            <td>{region}</td>
            <td>
                <button className="saveButton" onClick={handleAddCountry}>
                    SAVE
                </button>
            </td>
            <td>
                <Menu.Item
                    className="InfoButton"
                    as={Link}
                    to={`/TableRow/${name.official}`}
                    size="mini"
                >
                    <Icon name="info circle" size="big"></Icon>
                </Menu.Item>
            </td>
        </tr>
    )
}

export default TableRow
