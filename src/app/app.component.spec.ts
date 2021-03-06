import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import { PostFormModule } from './post-form/post-form.module';

xdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SearchModule,
        PostFormModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
