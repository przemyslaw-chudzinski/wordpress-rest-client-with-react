import {calculateOffset, parseDate, assignQueryParams, isCallable} from './utils';

describe('calculateOffset', () => {

    it('should return 0 when argument is equal {pageNumber: 1, perPage: *}', () => {
        const result = calculateOffset({pageNumber: 1, perPage: 10});
        expect(result).toBe(0);
    });

    it('should return 0 when argument is equal {pageNumber: *, perPage: 0} ', () => {
        const result = calculateOffset({pageNumber: 1, perPage: 0});
        expect(result).toBe(0);
    });

    it('should return 12 when argument is equal {pageNumber: 5, perPage: 3} ', () => {
        const result = calculateOffset({pageNumber: 5, perPage: 3});
        expect(result).toBe(12);
    });

    it('should return number when gets correct argument', () => {
        const result = calculateOffset({pageNumber: 5, perPage: 3});
        expect(typeof result === 'number').toBeTruthy();
    });

    it('should return null when passed argument is empty', () => {
        const result = calculateOffset({});
        expect(result).toBe(null);
    });

});


describe('parseDate', () => {

    it('should return null when passed argument equals null', () => {
        const result = parseDate(null);
        expect(result).toBe(null);
    });

    it('should return null when passed argument equals false', () => {
        const result = parseDate(false);
        expect(result).toBe(null);
    });

    it('should return 23-02-2019 when passed argument equals 1550927551425', () => {
        const result = parseDate(1550927551425);
        expect(result).toBe('23-02-2019');
    });

    it('should return 23-02-2019 when passed argument equals December 17, 1995 03:24:00', () => {
        const result = parseDate('December 17, 1995 03:24:00');
        expect(result).toBe('17-12-1995');
    });

    it('should return string when gets correct date format', () => {
        const result = parseDate(Date.now());
        expect(typeof result === 'string').toBeTruthy();
    });

    it ('should return null when format is not passed', () => {
        const result = parseDate();
        expect(result).toBe(null);
    });

});

describe('assignQueryParams', () => {

    it('should return empty string when argument equals {}', () => {
        const result = assignQueryParams({});
        expect(result).toBe('');
    });

    it('should return empty string when argument equals null', () => {
        const result = assignQueryParams(null);
        expect(result).toBe('');
    });

    it('should return ?per_page=10&offset=20 string when argument equals {per_page: 10, offset: 20}', () => {
        const result = assignQueryParams({per_page: 10, offset: 20});
        expect(result).toBe('?per_page=10&offset=20');
    });

    it('should return ?per_page=10 string when argument equals {per_page: 10, offset: null}', () => {
        const result = assignQueryParams({per_page: 10, offset: null});
        expect(result).toBe('?per_page=10');
    });


});

describe('isCallable', () => {

    it('should return true when function reference is passed', () => {
        const fn = () => {};
        expect(isCallable(fn)).toBeTruthy();
    });

    it('should return false when function reference is not passed', () => {
        const fn = '';
        expect(isCallable(fn)).toBeFalsy();
    });

});

