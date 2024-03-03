import React from 'react'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

import "../css/card.css"
export default function Card() {
    return (
        <div className="card">
            <InsertDriveFileIcon color="action" className="image"  width={24} height={22}/>
            <div className="title">title</div>
        </div>
    )
}
