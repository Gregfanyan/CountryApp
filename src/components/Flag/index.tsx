import React from 'react'
import { FlagPropsType } from '../../types/ui'

import './flag.scss'

export default ({ flag }: FlagPropsType) => {
    return (
        <div className="flag-container">
            <img src={flag} alt="countryFlags" />
        </div>
    )
}
