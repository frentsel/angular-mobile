import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentsComponent } from './comments.component';
import { CommentModule } from './comment/comment.module';
import { FormsModule } from '@angular/forms';

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        CommentModule
      ],
      declarations: [CommentsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be defined', () => {
    expect(component.text).toBeNull();
    expect(component.entry).toEqual({
      comments: [],
      author: null
    });
    expect(component.send).toBeDefined();
  });

  it('check send method', () => {
    component.text = 'test';
    component.send();
    expect(component.text).toBeNull();
  });
});
