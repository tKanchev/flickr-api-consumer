import { getJsonp } from '../data/crud';

class FlickrService {
    public static flickrFeedUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';
    
    public static loadFeed() {
        return getJsonp(FlickrService.flickrFeedUrl);
    }
}

export default FlickrService;