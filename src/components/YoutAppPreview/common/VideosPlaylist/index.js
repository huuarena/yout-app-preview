import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import VideoCard from '../VideoCard';
import FooterPagination from '../FooterPagination';
import PagiButton from '../PagiButton';
import './styles.scss';

VideosPlaylist.propTypes = {
    playlistVariant: PropTypes.oneOf(['vertical', 'horizontal']),
    cardVariant: PropTypes.oneOf(['classic', 'horizontal', 'cinema']),
};

VideosPlaylist.defaultProps = {
    playlistVariant: 'horizontal',
    cardVariant: 'classic',
};

function VideosPlaylist(props) {
    const { playlistVariant, cardVariant, widget } = props;
    const { youtube_videos } = widget;

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(3);

    const updateWindowDimensions = () => {
        // live
        if (window.innerWidth < 600) {
            setLimit(1);
        }
        if (window.innerWidth < 900) {
            setLimit(2);
        }
        if (window.innerWidth >= 900) {
            setLimit(3);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', () => {
            updateWindowDimensions();
        });
    }, []);

    return (
        <div className={`template-videos-playlist template-videos-playlist-${playlistVariant}`}>
            {/* <div className={`video-list video-list-${app_mode.data[app_mode.selected]}`}> */}
            <div className={`video-list video-list-live`}>
                {youtube_videos.items.length > 0 &&
                    youtube_videos.items
                        .slice((page - 1) * limit, page * limit)
                        .map((item, index) => (
                            <div key={index} className="video-list-item">
                                {/* <VideoCard variant={cardVariant} video={item} /> */}
                                {console.log('item :>> ', item)}
                            </div>
                        ))}

                {widget.setting.layout.slider_settings.elements.show_navigation_arrows.show &&
                    page > 1 && (
                        <PagiButton
                            variant={
                                widget.setting.layout.slider_settings.direction.selected === 0
                                    ? 'previous'
                                    : 'up'
                            }
                            onClick={() => setPage(page - 1)}
                        />
                    )}
                {widget.setting.layout.slider_settings.elements.show_navigation_arrows.show &&
                    page < parseInt(youtube_videos.items.length / limit) && (
                        <PagiButton
                            variant={
                                widget.setting.layout.slider_settings.direction.selected === 0
                                    ? 'next'
                                    : 'down'
                            }
                            onClick={() => setPage(page + 1)}
                        />
                    )}
            </div>

            {widget.setting.layout.slider_settings.elements.show_pagination.show && (
                <FooterPagination
                    page={page}
                    totalPages={parseInt(youtube_videos.items.length / limit)}
                    onChange={(value) => setPage(value)}
                />
            )}
        </div>
    );
}

export default VideosPlaylist;
