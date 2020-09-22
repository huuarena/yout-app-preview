import React from 'react';
import PropTypes from 'prop-types';
import formatDateTime from '../../../../utils/formatDateTime';
import formatLongNumber from '../../../../utils/formatLongNumber';
import formatYoutubeVideoDuration from '../../../../utils/formatYoutubeVideoDuration';
import './styles.scss';

const youtubeIcon = (
    <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" className="youtube-icon">
        <g>
            <path
                style={{ fill: '#F44336' }}
                d="M490.24,113.92c-13.888-24.704-28.96-29.248-59.648-30.976C399.936,80.864,322.848,80,256.064,80
   c-66.912,0-144.032,0.864-174.656,2.912c-30.624,1.76-45.728,6.272-59.744,31.008C7.36,138.592,0,181.088,0,255.904
   C0,255.968,0,256,0,256c0,0.064,0,0.096,0,0.096v0.064c0,74.496,7.36,117.312,21.664,141.728
   c14.016,24.704,29.088,29.184,59.712,31.264C112.032,430.944,189.152,432,256.064,432c66.784,0,143.872-1.056,174.56-2.816
   c30.688-2.08,45.76-6.56,59.648-31.264C504.704,373.504,512,330.688,512,256.192c0,0,0-0.096,0-0.16c0,0,0-0.064,0-0.096
   C512,181.088,504.704,138.592,490.24,113.92z"
            />
            <polygon style={{ fill: '#FAFAFA' }} points="192,352 192,160 352,256 	" />
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
    </svg>
);

VideoCard.propTypes = {
    variant: PropTypes.oneOf(['classic', 'horizontal', 'cinema']),
    video: PropTypes.object.isRequired,
};

VideoCard.defaultProps = {
    variant: 'classic',
};

function VideoCard(props) {
    const { variant, video, widget, videoSelected, onSelectVideo } = props;

    return (
        <div
            className={`yout-app-video-card yout-app-video-card-${variant}`}
            onClick={() =>
                widget.setting.layout.video.mode.selected === 2
                    ? window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank')
                    : onSelectVideo(video)
            }
        >
            <div className="thumbnail">
                <img alt="" src={video.snippet.thumbnails.high.url} />
                {widget.setting.layout.video.elements.play_icon.show && (
                    <div className="play-icon">{youtubeIcon}</div>
                )}
                {widget.setting.layout.video.elements.duration.show && (
                    <div className="duration">
                        {formatYoutubeVideoDuration(video.contentDetails.duration)}
                    </div>
                )}

                {JSON.stringify(videoSelected) !== '{}' &&
                    videoSelected.id === video.id &&
                    widget.setting.layout.video.mode.selected === 1 && (
                        <div className="video-play">
                            <iframe
                                title="youtube video"
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${videoSelected.id}?autoplay=1`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
            </div>

            <div className="video-infomation">
                {widget.setting.layout.video.elements.title.show && (
                    <div className="title">{video.snippet.title}</div>
                )}
                {widget.setting.layout.video.elements.date.show && (
                    <div className="publish-time">
                        {formatDateTime(video.snippet.publishedAt, 'MM/DD/YYYY')}
                    </div>
                )}
                {widget.setting.layout.video.elements.description.show && (
                    <div className="description">{video.snippet.description}</div>
                )}
                <div className="statistics">
                    {widget.setting.layout.video.elements.views_counter.show && (
                        <div>{formatLongNumber(video.statistics.viewCount)} Views</div>
                    )}
                    {widget.setting.layout.video.elements.views_counter.show &&
                        widget.setting.layout.video.elements.likes_counter.show && (
                            <div className="divider" />
                        )}
                    {widget.setting.layout.video.elements.likes_counter.show && (
                        <div>{formatLongNumber(video.statistics.likeCount)} Likes</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
