import React from 'react';
import './styles.scss';

function Logo(props) {
    const { widget } = props;

    return (
        <div className="template-logo">
            <a href={widget.youtube_channel_source.url} target="_blank" rel="noopener noreferrer">
                <img alt="" src={widget.youtube_channel.items[0].snippet.thumbnails.medium.url} />
            </a>
        </div>
    );
}

export default Logo;
