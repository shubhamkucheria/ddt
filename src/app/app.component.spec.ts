import { TestBed, async } from '@angular/core/testing';
import { TableComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TableComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(TableComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(TableComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('NgxEasyTable');
  }));
  it('should render table', async(() => {
    const fixture = TestBed.createComponent(TableComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    expect(component.configuration).toBeUndefined();
    // expect(compiled.querySelector('global-search').textContent).toContain('Welcome to app!');
  }));
});
