import React from 'react';
import formatLongNumber from '../../../../utils/formatLongNumber';
import './styles.scss';

const youtubeIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="512"
        height="512"
        x="0"
        y="0"
        viewBox="0 -77 512.00213 512"
        className="icon-youtube"
    >
        <g>
            <path
                xmlns="http://www.w3.org/2000/svg"
                d="m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0"
                fill="#ffffff"
                data-original="#ff0000"
            />
            <path
                xmlns="http://www.w3.org/2000/svg"
                d="m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0"
                fill="#ff0000"
                data-original="#ffffff"
            />
        </g>
    </svg>
);

function SubscribeButton(props) {
    const { widget } = props;

    return (
        <div className="yout-app-subscribe-button">
            <a
                href={widget.youtube_channel.youtube_channel_source.url + '?sub_confirmation=1'}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="youtube-logo">
                    {youtubeIcon}
                    <div>Youtube</div>
                </div>
            </a>
            <div className="subscribers-counter">
                {formatLongNumber(
                    widget.youtube_channel.youtube_channel.items[0].statistics.subscriberCount,
                )}
            </div>
        </div>
    );
}

export default SubscribeButton;
