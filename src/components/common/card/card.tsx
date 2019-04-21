import React from "react";
import { Item } from "../../models/feed/item.model";
import { Image, ImageFit } from 'office-ui-fabric-react/lib-commonjs/Image';
import { TooltipHost } from 'office-ui-fabric-react/lib-commonjs/Tooltip';
import { Link } from 'office-ui-fabric-react/lib-commonjs/Link';
import CardUtils from "../../utils/card-utils";

interface IcardProps {
    item: Item
}

interface ICardState { }

class Card extends React.Component<IcardProps, ICardState> {
    constructor(props: IcardProps) {
        super(props);
    }

    private getTooltip(tooltipContent: string, linkText: string, linkUrl: string, className?: string, key?: string): JSX.Element {
        return (
            <TooltipHost key={key} content={tooltipContent} calloutProps={{ gapSpace: 0 }}>
                <Link className={className} href={linkUrl}>{linkText}</Link>
            </TooltipHost>
        )
    }

    render(): JSX.Element {
        const { item } = this.props;
        const profileUrl = CardUtils.getProfileUrl(item.author_id);
        const author = CardUtils.getAuthorName(item.author);
        const title = CardUtils.getTitle(item.title);
        const description = CardUtils.getDescription(item.description);
        const tags = CardUtils.getTags(item.tags);
        
        return (
            <div className={'photo-card'}>
                <div className={'photo-card__img'}>
                    {
                        item.media && <Image src={item.media.m} imageFit={ImageFit.cover} height={200} width={260} />
                    }
                </div>
                <div className={'photo-card__info'}>
                    <div className={'title'}>
                        {this.getTooltip(item.title, title, item.link)}
                    </div>
                    <span className={'span-separator'}>by</span>
                    <div className={'author'}>
                        {this.getTooltip(author, author, profileUrl)}
                    </div>
                </div>
                <div className={'photo-card__description'}>{description}</div>
                <div className='photo-card__tags'>
                    <span>Tags: </span>
                    
                    {
                        tags.map(tag => {
                            const tagUrl = CardUtils.getTagUrl(tag);
                            const tagNameCut = CardUtils.cutText(tag, 15);
                            const tagClassName = 'tag';
                            const tagJsxElement = this.getTooltip(tag, tagNameCut, tagUrl, tagClassName, tag);
                            return tagJsxElement;
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Card;