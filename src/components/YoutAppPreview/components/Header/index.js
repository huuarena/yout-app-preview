import React from 'react';
import formatLongNumber from '../../../../utils/formatLongNumber';
import Logo from '../Logo';
import SubscribeButton from '../SubscribeButton';
import './styles.scss';

function Header(props) {
    const { widget } = props;

    const layoutIndex = widget.setting.layout.header.layout.selected;
    const layoutName = widget.setting.layout.header.layout.data[layoutIndex].toLowerCase();

    return (
        <div className={`yout-app-preview-header  yout-app-preview-header-${layoutName}`}>
            {widget.setting.layout.header.elements.logo.show && <Logo widget={widget} />}

            <div className="header-information">
                {widget.setting.layout.header.elements.channel_name.show && (
                    <div className="channel-name">
                        <a
                            href={widget.youtube_channel_source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {widget.youtube_channel_custom.channel_name ||
                                widget.youtube_channel.items[0].snippet.title}
                        </a>
                    </div>
                )}

                <div className="information-counter">
                    {widget.setting.layout.header.elements.subscribers_counter.show && (
                        <div>
                            {formatLongNumber(
                                widget.youtube_channel.items[0].statistics.subscriberCount,
                            )}{' '}
                            Subscribers
                        </div>
                    )}

                    {widget.setting.layout.header.elements.subscribers_counter.show &&
                        widget.setting.layout.header.elements.videos_counter.show && (
                            <div className="divider" />
                        )}

                    {widget.setting.layout.header.elements.videos_counter.show && (
                        <div>
                            {formatLongNumber(
                                widget.youtube_channel.items[0].statistics.videoCount,
                            )}{' '}
                            Videos
                        </div>
                    )}

                    {((widget.setting.layout.header.elements.videos_counter.show &&
                        widget.setting.layout.header.elements.views_counter.show) ||
                        (widget.setting.layout.header.elements.subscribers_counter.show &&
                            widget.setting.layout.header.elements.views_counter.show)) && (
                        <div className="divider" />
                    )}

                    {widget.setting.layout.header.elements.views_counter.show && (
                        <div>
                            {formatLongNumber(widget.youtube_channel.items[0].statistics.viewCount)}{' '}
                            Views
                        </div>
                    )}
                </div>

                {widget.setting.layout.header.elements.channel_description.show && (
                    <div className="template-channel-description">
                        {widget.youtube_channel_custom.channel_description ||
                            widget.youtube_channel.items[0].snippet.description}
                    </div>
                )}
            </div>

            {widget.setting.layout.header.elements.subcribe_button.show && (
                <SubscribeButton widget={widget} />
            )}
        </div>
    );
}

export default Header;
