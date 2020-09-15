import { AppPage } from '../po/app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.load();
    expect(page.getTitle()).toContain('Tab 1');
  });
});
