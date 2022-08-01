import React from 'react'
import { FlagPropsType } from '../../types/ui'

import './flag.scss'

export default ({ flags }: FlagPropsType) => {
    return (
        <div className="flag-container">
            <img src={flags.png} alt="countryFlags" />
        </div>
    )
}
