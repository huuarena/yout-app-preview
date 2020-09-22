import React from 'react';
import PropTypes from 'prop-types';
import formatDateTime from '../../../../utils/formatDateTime';
import formatLongNumber from '../../../../utils/formatLongNumber';
import formatYoutubeVideoDuration from '../../../../utils/formatYoutubeVideoDuration';
import './styles.scss';

VideoCard.propTypes = {
    variant: PropTypes.oneOf(['classic', 'horizontal', 'cinema']),
    video: PropTypes.object.isRequired,
};

VideoCard.defaultProps = {
    variant: 'classic',
};

function VideoCard(props) {
    const { variant, video, widget, videoSelected } = props;

    return (
        <div
            className={`template-video-card template-video-card-${variant}`}
            // onClick={() =>
            //     widget.setting.layout.video.mode.selected === 2
            //         ? window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank')
            //         : actions.changeVideoPlayAction(video)
            // }
        >
            <div className="thumbnail">
                <img alt="" src={video.snippet.thumbnails.high.url} />
                {widget.setting.layout.video.elements.play_icon.show && (
                    <div className="youtube-icon" />
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
