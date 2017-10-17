import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTable() {
    return element
      .all(by.className('ng2-table__table--striped'))
      .all(by.css('tbody tr'));
  }
}
