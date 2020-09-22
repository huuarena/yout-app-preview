import React from 'react';
import './styles.scss';

function Banner(props) {
    const { widget } = props;

    const layoutIndex = widget.setting.layout.header.layout.selected;
    const layoutName = widget.setting.layout.header.layout.data[layoutIndex].toLowerCase();

    return (
        <div className={`template-banner template-banner-${layoutName}`}>
            <img
                alt=""
                src={widget.youtube_channel.items[0].brandingSettings.image.bannerImageUrl}
            />
        </div>
    );
}

export default Banner;
