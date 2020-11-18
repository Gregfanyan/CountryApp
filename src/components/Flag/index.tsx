import React from 'react'
import { FlagPropsType } from '../../types'

import './flag.scss'

export default ({ flag }: FlagPropsType) => {
    return (
        <div className="flag">
            <img src={flag} alt="" width="120px" />
        </div>
    )
}
