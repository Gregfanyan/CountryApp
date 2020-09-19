import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import Flag from '../Flag'

import { TableRowProps } from '../../types'
import ThemeContext from '../../useContext/context'

import './tableRow.scss'

export default function TableRow({
  flagUrl,
  countryName,
  languages,
  population,
  region,
}: TableRowProps) {
  const { theme } = useContext(ThemeContext)

  return (
    <tr className="tableRow">
      <td>
        <Flag flag={flagUrl} />
      </td>
      <td>
        {
          <Link
            to={`/TableRow/${countryName}`}
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            {countryName}
          </Link>
        }
      </td>
      <td>
        {languages &&
          languages.map((lang: any) => <li key={lang.name}>{lang.name}</li>)}
      </td>
      <td>{population}</td>
      <td>{region}</td>
      <td>
        <button className="AddButton" style={{ color: theme.foreground }}>
          ADD
        </button>
      </td>
    </tr>
  )
}
