import React from "react";
import { Item } from "../../models/feed/item.model";

interface IcardProps{
    item: Item
}

interface ICardState{}

class Card extends React.Component<IcardProps, ICardState> {
    constructor(props: IcardProps) {
        super(props);
    }

    private getTags(): Array<string> {
        const { item } = this.props;

        return item.tags.split('').filter(function(elem, index, self) {
            return index === self.indexOf(elem);
        })
    }

    render(): JSX.Element {
        const { item } = this.props;

        // var tags = this.getTags();
        
        return (
            <div className={'photo-card'}>
                <div className={'photo-card__img'}>{item.author_id}</div>
                <div className={'photo-card__info'}>
                    <div className={'title'}>{'item.title'}</div>
                    <span className={'span-separator'}>by</span>
                    <div className={'author'}>{'item.author'}</div>
                </div>
                <div className={'photo-card__description'}>
                    <span>Description: </span>
                    {item.author}
                </div>
                <div className='photo-card__tags'>
                    {
                        // tags.map(tag => {
                        //     const key = item.media.m + tag;
                        //     return <span key={key}>{tag}</span>
                        // })
                    }
                </div>
            </div>
        );
    }
}

export default Card;