import React from 'react'

const BreadCrumbs = ({ meal }) => {
    return (
        <div className="breadcrumbs">
            <div className="container">
                <a href="/">Home</a> / <a href="/results">Results</a> / <span>{meal}</span>
            </div>
        </div>
    )
}

export default BreadCrumbs