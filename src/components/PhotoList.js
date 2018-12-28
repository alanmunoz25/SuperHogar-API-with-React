import React from 'react';

const PhotoList = props =>

    <ul>
        {props.results.map((result, index) =>
            <li key={index}>
                <img alt="" src={result.urls.small} key={result.id} />
            </li>
        )}
    </ul>;

export default PhotoList;
