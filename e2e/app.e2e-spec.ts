import { AppPage } from './app.po';

describe('table', () => {
  let page: AppPage;
  let data;
  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    data = page.getTable();
  });

  it('should display 10 rows when default config', () => {
    data.getText().then((table) => {
      expect(table.length).toEqual(10);
    });
  });

  it('should get first row from table', () => {
    const firstRow = data.get(0);
    firstRow.getText().then((row) => {
      expect(row)
        .toEqual('+1 (949) 527-2108\n' +
          '36\n' +
          'KONGENE\n' +
          'Deanne Contreras\n' +
          'false');
    });
  });
});
