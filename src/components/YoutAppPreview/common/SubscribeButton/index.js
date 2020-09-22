import React from 'react';
import formatLongNumber from '../../../../utils/formatLongNumber';
import './styles.scss';

function SubscribeButton(props) {
    const { widget } = props;

    return (
        <div className="template-subscribe-button">
            <div className="youtube-logo">
                <div className="youtube-icon" />
                <div>Youtube</div>
            </div>
            <div className="subscribers-counter">
                {formatLongNumber(widget.youtube_channel.items[0].statistics.subscriberCount)}
            </div>
        </div>
    );
}

export default SubscribeButton;
