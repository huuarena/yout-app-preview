import React, { useState } from 'react';
import PropTypes from 'prop-types';
import formatDateTime from '../../../../utils/formatDateTime';
import formatLongNumber from '../../../../utils/formatLongNumber';
import SubscribeButton from '../SubscribeButton';
import Logo from '../Logo';
import './styles.scss';
import Parser from 'html-react-parser';

const closeIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="512"
        height="512"
        x="0"
        y="0"
        viewBox="0 0 329.26933 329"
        className="close-icon"
    >
        <g>
            <path
                xmlns="http://www.w3.org/2000/svg"
                d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
                fill="#ffffff"
                data-original="#000000"
            />
        </g>
    </svg>
);

const dislikeIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="512"
        height="512"
        x="0"
        y="0"
        viewBox="0 0 512 512"
        className="icon"
    >
        <g>
            <g xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path
                        d="M117.333,10.667h-64C23.936,10.667,0,34.603,0,64v170.667C0,264.064,23.936,288,53.333,288h96V21.461    C140.395,14.72,129.344,10.667,117.333,10.667z"
                        fill="#888888"
                        data-original="#000000"
                    />
                </g>
            </g>
            <g xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path
                        d="M512,208c0-18.496-10.581-34.731-26.347-42.667c3.285-6.549,5.013-13.803,5.013-21.333    c0-18.517-10.603-34.752-26.368-42.688c4.885-9.728,6.315-20.928,3.861-32.043C463.381,47.659,443.051,32,419.819,32H224    c-13.995,0-35.968,4.416-53.333,12.608v228.651l2.56,1.301l61.44,133.12V480c0,3.243,1.472,6.315,3.989,8.341    c0.683,0.512,16.512,12.992,38.677,12.992c24.683,0,64-39.061,64-85.333c0-29.184-10.453-65.515-16.981-85.333h131.776    c28.715,0,53.141-21.248,55.637-48.363c1.387-15.211-3.691-29.824-13.653-40.725C506.923,232.768,512,220.821,512,208z"
                        fill="#888888"
                        data-original="#000000"
                    />
                </g>
            </g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
        </g>
    </svg>
);

const likeIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="512"
        height="512"
        x="0"
        y="0"
        viewBox="0 0 512 512"
        className="icon"
    >
        <g>
            <g xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path
                        d="M53.333,224C23.936,224,0,247.936,0,277.333V448c0,29.397,23.936,53.333,53.333,53.333h64    c12.011,0,23.061-4.053,32-10.795V224H53.333z"
                        fill="#888888"
                        data-original="#000000"
                    />
                </g>
            </g>
            <g xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path
                        d="M512,304c0-12.821-5.077-24.768-13.888-33.579c9.963-10.901,15.04-25.515,13.653-40.725    c-2.496-27.115-26.923-48.363-55.637-48.363H324.352c6.528-19.819,16.981-56.149,16.981-85.333c0-46.272-39.317-85.333-64-85.333    c-22.165,0-37.995,12.48-38.677,12.992c-2.517,2.027-3.989,5.099-3.989,8.341v72.341l-61.44,133.099l-2.56,1.301v228.651    C188.032,475.584,210.005,480,224,480h195.819c23.232,0,43.563-15.659,48.341-37.269c2.453-11.115,1.024-22.315-3.861-32.043    c15.765-7.936,26.368-24.171,26.368-42.688c0-7.552-1.728-14.784-5.013-21.333C501.419,338.731,512,322.496,512,304z"
                        fill="#888888"
                        data-original="#000000"
                    />
                </g>
            </g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
        </g>
    </svg>
);

const shareIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="512"
        height="512"
        x="0"
        y="0"
        viewBox="0 -22 512 511"
        className="icon"
    >
        <g>
            <path
                xmlns="http://www.w3.org/2000/svg"
                d="m512 233.820312-212.777344-233.320312v139.203125h-45.238281c-140.273437 0-253.984375 113.710937-253.984375 253.984375v73.769531l20.09375-22.019531c68.316406-74.851562 164.980469-117.5 266.324219-117.5h12.804687v139.203125zm0 0"
                fill="#888888"
                data-original="#000000"
            />
        </g>
    </svg>
);

PlayVideoPopup.propTypes = {
    video: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
};

function PlayVideoPopup(props) {
    const { video, widget, onClose } = props;

    const [showMore, setshowMore] = useState(false);

    const renderCommentItem = (item, index) => {
        const comment = item.snippet.topLevelComment.snippet;

        return (
            <div className="comment-item" key={index}>
                <div className="user-avatar">
                    <a href={comment.authorChannelUrl} target="_blank" rel="noopener noreferrer">
                        <img alt="" src={comment.authorProfileImageUrl} />
                    </a>
                </div>
                <div className="comment-body">
                    <div className="user-name">
                        <a
                            href={comment.authorChannelUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {comment.authorDisplayName}
                        </a>
                        <div className="published-at">
                            {formatDateTime(comment.publishedAt, 'MM/DD/YYYY')}
                        </div>
                    </div>
                    <div className="comment-text">{Parser(comment.textDisplay)}</div>
                    {comment.likeCount > 0 && (
                        <div className="comment-report">
                            {likeIcon}
                            <div>{comment.likeCount}</div>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="yout-app-popup-wrapper">
            <div className="yout-app-popup-wrapper-padding" onClick={onClose} />
            <div className="yout-app-popup-wrapper-body">
                <div className="yout-popup-header" onClick={onClose}>
                    {closeIcon}
                </div>

                <div className="yout-popup-body">
                    <div id="yout-popup-video-overlay" className="yout-popup-video-overlay">
                        <iframe
                            title="youtube video"
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="video-info">
                        <div className="video-info-header">
                            {widget.setting.layout.popup.elements.title.show && (
                                <div className="video-info-title">{video.snippet.title}</div>
                            )}

                            <div className="video-info-statistics">
                                {widget.setting.layout.popup.elements.views_counter.show && (
                                    <div className="views-count">
                                        {formatLongNumber(video.statistics.viewCount)} Views
                                    </div>
                                )}
                                <div className="more">
                                    {widget.setting.layout.popup.elements.likes_counter.show && (
                                        <div className="likes-count">
                                            {likeIcon}
                                            <div>
                                                {formatLongNumber(video.statistics.likeCount)}
                                            </div>
                                        </div>
                                    )}
                                    {widget.setting.layout.popup.elements.dislikes_counter.show && (
                                        <div className="dislikes-count">
                                            {dislikeIcon}
                                            <div>
                                                {formatLongNumber(video.statistics.dislikeCount)}
                                            </div>
                                        </div>
                                    )}
                                    {widget.setting.layout.popup.elements.share_button.show && (
                                        <div className="share">
                                            {shareIcon}
                                            <div className="content">SHARE</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="channel-info">
                            {widget.setting.layout.popup.elements.channel_logo.show && (
                                <Logo widget={widget} />
                            )}
                            <div className="channel-info-more">
                                {widget.setting.layout.popup.elements.channel_name.show && (
                                    <div className="channel-name">
                                        <a
                                            href={widget.youtube_channel.youtube_channel_source.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {widget.setting.layout.header.channel_name_custom ||
                                                widget.youtube_channel.youtube_channel.items[0]
                                                    .snippet.title}
                                        </a>
                                    </div>
                                )}
                                {widget.setting.layout.popup.elements.date.show && (
                                    <div className="video-publish">
                                        Published at{' '}
                                        {formatDateTime(video.snippet.publishedAt, 'MM/DD/YYYY')}
                                    </div>
                                )}
                                {widget.setting.layout.popup.elements.description.show && (
                                    <div className="channel-description">
                                        <div
                                            className={`channel-description-content ${
                                                showMore && 'channel-description-content-show-more'
                                            }`}
                                        >
                                            {widget.youtube_channel.youtube_channel.items[0].snippet.description
                                                .split('\n')
                                                .map((item, index) => (
                                                    <div key={index} className="text-line">
                                                        {item}
                                                    </div>
                                                ))}
                                        </div>
                                        {widget.setting.layout.popup.elements
                                            .description_more_button.show && (
                                            <span
                                                className="show-more"
                                                onClick={() => setshowMore(!showMore)}
                                            >
                                                {showMore ? 'SHOW LESS' : 'SHOW MORE'}
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>
                            {widget.setting.layout.popup.elements.subcribe_button.show && (
                                <SubscribeButton widget={widget} />
                            )}
                        </div>
                    </div>

                    <div className="yout-popup-video-comments">
                        {Boolean(video.comments) &&
                            video.comments.length > 0 &&
                            video.comments.items.map((item, index) =>
                                renderCommentItem(item, index),
                            )}
                    </div>
                </div>
            </div>
            <div className="yout-app-popup-wrapper-padding" onClick={onClose} />
        </div>
    );
}

export default PlayVideoPopup;
