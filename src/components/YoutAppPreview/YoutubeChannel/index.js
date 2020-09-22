import React from 'react';
import './styles.scss';
import Banner from '../common/Banner';
import Header from '../common/Header';
import VideosPlaylist from '../common/VideosPlaylist';

function YoutubeChannel(props) {
    const { widget, videoSelected, onSelectVideo } = props;

    const layoutIndex = widget.setting.layout.video.layout.selected;
    const layoutName = widget.setting.layout.video.layout.data[layoutIndex].toLowerCase();

    return (
        <div className="youtube-channel">
            {widget.setting.layout.header.show &&
                widget.setting.layout.header.elements.banner.show && <Banner widget={widget} />}

            {widget.setting.layout.header.show && <Header widget={widget} />}

            <VideosPlaylist
                widget={widget}
                playlistVariant="horizontal"
                cardVariant={layoutName !== 'horizontal' ? layoutName : 'classic'}
                videoSelected={videoSelected}
                onSelectVideo={onSelectVideo}
            />
        </div>
    );
}

export default YoutubeChannel;
