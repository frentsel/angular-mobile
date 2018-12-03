import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleComponent } from './article.component';
import { CommentsModule } from '../comments/comments.module';
import { IconModule } from '../lib/icon/icon.module';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommentsModule,
        IconModule
      ],
      declarations: [ArticleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be defined', () => {
    expect(component.commentsActive).toBeDefined();
    expect(component.commentsActive).toBeFalsy();
    expect(component.entry).toBeDefined();
    expect(component.entry).toBeNull();
    expect(component.activateComments).toBeDefined();
    expect(component.like).toBeDefined();
  });

  it('should switch commentsActive', () => {
    component.commentsActive = false;
    component.activateComments();
    expect(component.commentsActive).toBeTruthy();
  });
});
