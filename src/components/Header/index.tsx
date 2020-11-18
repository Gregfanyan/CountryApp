import React from 'react'

import { HeaderProps } from '../../types'

import './Header.scss'

export default function Header({ setActiveFilter }: HeaderProps) {
    return (
        <div className="header">
            <ul className="HeadTableRow">
                <li>
                    <button onClick={() => setActiveFilter('flag')}>
                        Flag
                    </button>
                </li>
                <li>
                    <button onClick={() => setActiveFilter('name')}>
                        Name
                    </button>
                </li>
                <li>
                    <button onClick={() => setActiveFilter('language')}>
                        Language
                    </button>
                </li>
                <li>
                    <button onClick={() => setActiveFilter('population')}>
                        Population
                    </button>
                </li>
                <li>
                    <button onClick={() => setActiveFilter('region')}>
                        Region
                    </button>
                </li>
            </ul>
        </div>
    )
}
