import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Menu, Icon } from 'semantic-ui-react'

import Flag from '../Flag'
import { addCountry } from '../../redux'

import './tableRow.scss'

export default function TableRow({ countries }: any) {
    const dispatch = useDispatch()

    const handleAddCountry = () => {
        dispatch(addCountry(countries))
    }
    const { flag, name, languages, population, region } = countries
    return (
        <tr className="tableRow">
            <td>
                <Flag flag={flag} />
            </td>
            <td>
                <Link
                    to={`/TableRow/${name}`}
                    style={{ color: 'inherit', textDecoration: 'inherit' }}
                >
                    {name}
                </Link>
            </td>
            <td>
                {languages &&
                    languages.map((lang: any) => (
                        <li key={lang.name}>{lang.name}</li>
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
                    to={`/TableRow/${name}`}
                    size="mini"
                >
                    <Icon name="info circle" size="big"></Icon>
                </Menu.Item>
            </td>
        </tr>
    )
}
