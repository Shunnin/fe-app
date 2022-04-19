import { UrlUtil } from '../url';

describe('UrlUtil.buildQueryUrl()', () => {
  it('returns correct url with simple query', () => {
    const url = 'https://google.com';
    const queryObj = { page: 1, pageNumber: 10 };

    expect(UrlUtil.buildQueryUrl(url, queryObj)).toEqual('https://google.com?page=1&pageNumber=10');
  });

  it('returns correct query with query array', () => {
    const url = 'https://google.com';
    const queryObj = { status: ['active', 'inactive'] };

    expect(UrlUtil.buildQueryUrl(url, queryObj)).toEqual(
      'https://google.com?status%5B0%5D=active&status%5B1%5D=inactive',
    );
  });

  it('returns correct query with empty query', () => {
    const url = 'https://google.com';
    const queryObj = {};

    expect(UrlUtil.buildQueryUrl(url, queryObj)).toEqual('https://google.com?');
  });

  it('returns correct query with query boolean', () => {
    const url = 'https://google.com';
    const queryObj = { enable: true };

    expect(UrlUtil.buildQueryUrl(url, queryObj)).toEqual('https://google.com?enable=true');
  });
});
