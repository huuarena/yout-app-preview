import React from 'react';
import './styles.scss';

function Banner(props) {
    const { widget } = props;

    const layoutIndex = widget.setting.layout.header.layout.selected;
    const layoutName = widget.setting.layout.header.layout.data[layoutIndex].toLowerCase();

    return (
        <div className={`yout-app-banner yout-app-banner-${layoutName}`}>
            <img
                alt="Shopify Yout App"
                src={widget.youtube_channel.items[0].brandingSettings.image.bannerImageUrl}
            />
        </div>
    );
}

export default Banner;
