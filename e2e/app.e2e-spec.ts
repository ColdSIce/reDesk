import { ReDeskaPage } from './app.po';

describe('re-deska App', function() {
  let page: ReDeskaPage;

  beforeEach(() => {
    page = new ReDeskaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
