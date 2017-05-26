import { HrBoilerplatePage } from './app.po';

describe('hr-boilerplate App', () => {
  let page: HrBoilerplatePage;

  beforeEach(() => {
    page = new HrBoilerplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
