import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => (
    <div className="homepage">
        <h2 className="homepage--header">Home Page Header</h2>
        <Link to="library">
            <button className="button button--default">Go To Lib</button>
        </Link>
    </div>
)

export default HomePage