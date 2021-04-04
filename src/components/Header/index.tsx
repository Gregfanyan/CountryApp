import React from 'react'

import './Header.scss'

export default function Header({ setActiveFilter }: any) {
    return (
        <tr className="headTableRow">
            <td className="flag">
                <button onClick={() => setActiveFilter('flag')}>Flag</button>
            </td>
            <td>
                <button onClick={() => setActiveFilter('name')}>Name</button>
            </td>
            <td>
                <button onClick={() => setActiveFilter('language')}>
                    Language
                </button>
            </td>
            <td>
                <button onClick={() => setActiveFilter('population')}>
                    Population
                </button>
            </td>
            <td>
                <button onClick={() => setActiveFilter('region')}>
                    Region
                </button>
            </td>
        </tr>
    )
}
