import React, { useEffect, useState } from 'react';
import VideoCard from '../VideoCard';
import FooterPagination from '../FooterPagination';
import PagiButton from '../PagiButton';
import './styles.scss';

/**
 *
 * @param {Number} number
 */
const createArrayFromNumber = (number) => {
    let array = [];

    if (number <= 0) {
        return array;
    }

    for (let i = 0; i < number; i++) {
        array.push(i);
    }

    return array;
};

function VideosPlaylist(props) {
    const { widget, videoSelected, onSelectVideo } = props;
    const { youtube_videos } = widget.youtube_channel;
    const { columns, rows } = widget.setting.layout.columns_rows;

    const [newColumns, setNewColumns] = useState(columns);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const updateWindowDimensions = () => {
            const el = document.getElementById('yout-app-videos-playlist');
            if (el) {
                const elWidth = el.offsetWidth;

                setPage(1);

                if (elWidth > 1300) {
                    return setNewColumns(columns > 5 ? 5 : columns);
                }
                if (elWidth > 1150) {
                    return setNewColumns(columns > 4 ? 4 : columns);
                }
                if (elWidth > 800) {
                    return setNewColumns(columns > 3 ? 3 : columns);
                }
                if (elWidth > 550) {
                    return setNewColumns(columns > 2 ? 2 : columns);
                }

                return setNewColumns(1);
            }
        };
        updateWindowDimensions();

        window.addEventListener('resize', () => {
            updateWindowDimensions();
        });
    }, [columns]);

    const renderVideoCards = () => {
        const rowsArray = createArrayFromNumber(rows);
        const columnsArray = createArrayFromNumber(newColumns);
        const newVideos = youtube_videos.items.slice(
            (page - 1) * rows * newColumns,
            page * rows * newColumns,
        );

        return rowsArray.map((item, index) => (
            <div className="video-list-row" key={index}>
                {columnsArray.map((_item, _index) => (
                    <div key={_index} className="video-list-item">
                        {newVideos[_index * rows + index] && (
                            <VideoCard
                                video={newVideos[_index * rows + index]}
                                widget={widget}
                                videoSelected={videoSelected}
                                onSelectVideo={onSelectVideo}
                            />
                        )}
                    </div>
                ))}
            </div>
        ));
    };

    return (
        <div id="yout-app-videos-playlist" className={`yout-app-videos-playlist`}>
            <div className="video-list">
                {youtube_videos.items.length > 0 && renderVideoCards()}

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
                    page < parseInt(youtube_videos.items.length / (rows * newColumns)) && (
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
                    totalPages={parseInt(youtube_videos.items.length / (rows * newColumns))}
                    onChange={(value) => setPage(value)}
                />
            )}
        </div>
    );
}

export default VideosPlaylist;
