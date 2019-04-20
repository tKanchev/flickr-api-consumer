import React, { Fragment } from "react";
import FlickrService from "../../services/flickr.service";
import { Item } from "../models/feed/item.model";
import Card from "../common/card/card";
import { Spinner } from 'office-ui-fabric-react/lib/Spinner';

interface IFeedProps { }
interface IFeedState {
    items: Array<Item>;
    error: string;
    isLoading: boolean;
}
class Feed extends React.Component<IFeedProps, IFeedState> {
    constructor(props: IFeedProps) {
        super(props);
        this.state = {
            items: [],
            error: '',
            isLoading: false
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    isScrolledToBottom(): boolean {
        const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || window.innerHeight;

        return Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    }

    handleScroll(): void {
        const scrolledToBottom = this.isScrolledToBottom();

        if (scrolledToBottom) {
            this.loadMoreItems();
        }
    }

    loadMoreItems() {
        this.setState({ error: '', isLoading: true }, async () => {
            try {
                const newFeed = await FlickrService.loadFeed();
                this.setState(prevState => ({
                    items: [...prevState.items, ...newFeed.items],
                    isLoading: false
                }));
            } catch (error) {
                this.setState({ error })
            }
        });
    }

    componentDidMount(): void {
        window.addEventListener('scroll', this.handleScroll);

        this.setState({ error: '', isLoading: true }, async () => {
            try {
                const feed = await FlickrService.loadFeed();
                this.setState({
                    items: feed.items,
                    isLoading: false
                })
            } catch (error) {
                this.setState({ error })
            }
        });
    }


    render(): JSX.Element {
        return (
            <Fragment>
                <div className={'feed'} ref='scroll'>
                    {this.state.items.map((item, index) => {
                        return <Card item={item} key={index} />
                    })}
                </div>
                <div className={'loader'}>{this.state.isLoading && <Spinner label='Loading feed...'/>}</div>
            </Fragment>
        )
    }
}

export default Feed