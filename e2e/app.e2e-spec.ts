import { LunchOrderPage } from './app.po';

describe('lunch-order App', () => {
  let page: LunchOrderPage;

  beforeEach(() => {
    page = new LunchOrderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
