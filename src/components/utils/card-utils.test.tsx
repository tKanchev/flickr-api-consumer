import 'react-testing-library/cleanup-after-each';
import { cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import CardUtils from './card-utils';
import { UTILS_CONSTANTS } from "./config/card.constants";

afterEach(cleanup);

it('getProfile returns correct Url', () => {
    const { baseUrl } = UTILS_CONSTANTS;
    const testProfileId = '1'
    const expectedProfileUrl = `${baseUrl}people/${testProfileId}`;
    
    expect(CardUtils.getProfileUrl(testProfileId)).toBe(expectedProfileUrl);
});

it('getTagsurl returns correct Url', () => {
    const { baseUrl } = UTILS_CONSTANTS;
    const tag = 'coolTag'
    const expectedProfileUrl = `${baseUrl}photos/tags/${tag}`;
    
    expect(CardUtils.getTagUrl(tag)).toBe(expectedProfileUrl);
});

it('getAuthorName to be correct name', () => {
    const rawAuthorName = 'nobody@flickr.com ("John Doe")';
    const expectedName = 'John Doe';
    
    expect(CardUtils.getAuthorName(rawAuthorName)).toBe(expectedName);
});

it('cutText to correctly cut long text', () => {
    const longText = 'SomeEnoughLongText';
    const textMaxlength = 5;
    
    expect(CardUtils.cutText(longText, textMaxlength).length).toBe(textMaxlength);
});

it('getTitle cuts and returns title when very long ', () => {
    const { titleMaxLength } = UTILS_CONSTANTS;
    const longTitle = 'SomeEnoughLongTitle';
    const cutTitle = CardUtils.cutText(longTitle, titleMaxLength);

    expect(CardUtils.getTitle(longTitle).length).toBe(titleMaxLength);
    expect(CardUtils.getTitle(longTitle)).toBe(cutTitle);
});

it('getTitle cuts and returns title when very long', () => {
    const { titleMaxLength } = UTILS_CONSTANTS;
    const longTitle = 'SomeEnoughLongTitle';
    const cutTitle = CardUtils.cutText(longTitle, titleMaxLength);

    expect(CardUtils.getTitle(longTitle).length).toBe(titleMaxLength);
    expect(CardUtils.getTitle(longTitle)).toBe(cutTitle);
});

it('getTags returns correct only two tags', () => {    
    const tagsAsString = 'tagOne tagTwo tagThree';
    const expectedTagAtIndexZero = 'tagOne';
    const expectedTagAtIndexOne = 'tagTwo';

    expect(CardUtils.getTags(tagsAsString).length).toBe(2);
    expect(CardUtils.getTags(tagsAsString)[0]).toBe(expectedTagAtIndexZero);
    expect(CardUtils.getTags(tagsAsString)[1]).toBe(expectedTagAtIndexOne);
});

it('getDesciption returns no description', () => {
    const { noDescriptionText } = UTILS_CONSTANTS;
    const invalidDesciption = 'some invalid description';

    expect(CardUtils.getDescription(invalidDesciption)).toBe(noDescriptionText);
});

