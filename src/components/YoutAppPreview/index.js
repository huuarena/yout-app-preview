import React, { useState } from 'react';
import './styles.scss';
import YoutubeChannel from './YoutubeChannel';
import PlayVideoPopup from './common/PlayVideoPopup';

function YoutAppPreview(props) {
    const { widget } = props;
    const [videoSelected, setVideoSelected] = useState({});

    const renderComponent = () => {
        switch (widget.setting.id) {
            case 'setting-1':
                return (
                    <YoutubeChannel
                        widget={widget}
                        videoSelected={videoSelected}
                        onSelectVideo={(video) => setVideoSelected(video)}
                    />
                );

            default:
                return (
                    <YoutubeChannel
                        widget={widget}
                        videoSelected={videoSelected}
                        onSelectVideo={(video) => setVideoSelected(video)}
                    />
                );
        }
    };

    return (
        <div className="yout-app-preview">
            {renderComponent()}

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
