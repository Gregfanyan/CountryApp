import React from 'react'
import { Link } from 'react-router-dom'

import Flag from '../Flag'
import { TableRowProps } from '../../types'

import './tableRow.scss'

export default function TableRow({
  flagUrl,
  countryName,
  languages,
  population,
  region,
}: TableRowProps) {
  return (
    <tr className="tableRow">
      <td>
        <Flag flag={flagUrl} />
      </td>
      <td>
        <Link
          to={`/TableRow/${countryName}`}
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          {countryName}
        </Link>
      </td>
      <td>
        {languages &&
          languages.map((lang: any) => <li key={lang.name}>{lang.name}</li>)}
      </td>
      <td>{population}</td>
      <td>{region}</td>
      <td>
        <button className="AddButton">ADD</button>
      </td>
    </tr>
  )
}
