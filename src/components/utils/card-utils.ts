import { CARD_CONSTANTS } from "./config/card.constants";

class CardUtils {
    public static getProfileUrl(profileId: string): string {
        const { baseUrl } = CARD_CONSTANTS;
        const profileUrl = `${baseUrl}people/${profileId}`;

        return profileUrl;
    }

    public static getAuthorName(rawAuthorName: string) {
        const { authorNameMaxLength } = CARD_CONSTANTS;

        const regex = /"([^"]+)"/;
        const splittedName = rawAuthorName.match(regex);
        const authorName = splittedName && splittedName.length > 1
            ? splittedName[1]
            : rawAuthorName;
        const cutAuthorName = CardUtils.cutText(authorName, authorNameMaxLength);

        return cutAuthorName;
    }

    public static getTitle(rawTitle: string): string {
        const { titleMaxLength } = CARD_CONSTANTS;

        const cutTitle = CardUtils.cutText(rawTitle, titleMaxLength);

        return cutTitle;
    }

    public static getDescription(rawDescription: string): string {
        const { descriptionMaxLength } = CARD_CONSTANTS;
        const regex = /<p>.*?<\/p>/g;
        const descritionSplitted = rawDescription.match(regex);

        if (descritionSplitted && descritionSplitted.length > 2) {
            const description = descritionSplitted[2].replace(/<[^>]+>/g, '')
            const cutDescription = CardUtils.cutText(description, descriptionMaxLength);
            return `Description: ${cutDescription}`
        }

        return 'No description'
    }

    public static getTagUrl(tag: string): string {
        const { baseUrl } = CARD_CONSTANTS;
        const tagUrl = `${baseUrl}photos/tags/${tag}`;

        return tagUrl;
    }

    public static getTags(rawTags: string): Array<string> {
        if (rawTags && rawTags.length === 0) {
            return [];
        }
        const tagsUnique = rawTags.split(' ').filter(function (elem, index, self) {
            return index === self.indexOf(elem);
        });

        if (tagsUnique.length > 2) {
            return tagsUnique.slice(0, 2);
        }
        
        return tagsUnique;
    }

    public static cutText(text: string, maxLength: number): string {
        if (text.length > maxLength) {
            const cutText = text.substring(0, maxLength - 3);
            return `${cutText}...`
        }

        return text;
    }
}

export default CardUtils