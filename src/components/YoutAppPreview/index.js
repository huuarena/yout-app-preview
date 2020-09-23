import React, { useState } from 'react';
import './styles.scss';
import Banner from './components/Banner';
import Header from './components/Header';
import VideosPlaylist from './components/VideosPlaylist';
import PlayVideoPopup from './components/PlayVideoPopup';

function YoutAppPreview(props) {
    const { widget } = props;
    const [videoSelected, setVideoSelected] = useState({});

    return (
        <div className="yout-app-preview">
            {widget.setting.layout.header.show &&
                widget.setting.layout.header.elements.banner.show && <Banner widget={widget} />}

            {widget.setting.layout.header.show && <Header widget={widget} />}

            <VideosPlaylist
                widget={widget}
                videoSelected={videoSelected}
                onSelectVideo={(video) => setVideoSelected(video)}
            />

            {widget.setting.layout.video.mode.selected === 0 &&
                JSON.stringify(videoSelected) !== '{}' && (
                    <PlayVideoPopup
                        video={videoSelected}
                        widget={widget}
                        onClose={() => setVideoSelected({})}
                    />
                )}
        </div>
    );
}

export default YoutAppPreview;
