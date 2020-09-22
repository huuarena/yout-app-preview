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
                        handleSelectedVideo={(video) => setVideoSelected(video)}
                    />
                );

            default:
                return (
                    <YoutubeChannel
                        widget={widget}
                        handleSelectedVideo={(video) => setVideoSelected(video)}
                    />
                );
        }
    };

    return (
        <div className="yout-app-templates-preview">
            {renderComponent()}

            {widget.setting.layout.video.mode.selected === 0 &&
                JSON.stringify(videoSelected) !== '{}' && (
                    <PlayVideoPopup onClose={() => setVideoSelected({})} />
                )}
        </div>
    );
}

export default YoutAppPreview;
