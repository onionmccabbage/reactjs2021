import React, { Component } from 'react'

// class ImageIterator extends Component() {
const ImageIterator = (props) => {
    const listItems = props.sizes.map((size, index) => {
        return (
            <li key={index}>
                {/* <img src={'https://via.placeholder.com/' + size} /> */}
                <img src={`https://via.placeholder.com/${size}`} />
            </li>
        )
    })
    return (
        <ul>
            {listItems}
        </ul>
    )
}

export default ImageIterator