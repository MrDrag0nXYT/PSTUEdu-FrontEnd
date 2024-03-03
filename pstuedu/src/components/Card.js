import React from 'react'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

import "../css/card.css"


export default function Card({title, href}) {
    return (
        <a href={href} className="card link">
                <div className="card_div">
                    <InsertDriveFileIcon color="primary" className="image" width={24} height={24}/>
                    <div className="title">{title}</div>
                </div>
        </a>
    )
}
