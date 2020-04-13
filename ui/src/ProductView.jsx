import React from 'react';

export default function ProductView ({ image }) {
    const img_url = image.params;
    return (
        <img src={img_url} alt='icon' />
    );
}