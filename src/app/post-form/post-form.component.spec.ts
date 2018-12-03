import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PostFormComponent } from './post-form.component';
import { IconModule } from '../lib/icon/icon.module';
import { FormsModule } from '@angular/forms';

describe('PostFormComponent', () => {
  let component: PostFormComponent;
  let fixture: ComponentFixture<PostFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        IconModule,
        FormsModule
      ],
      declarations: [PostFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be defined', () => {
    expect(component.text).toBeNull();
    expect(component.post).toBeDefined();
  });

  it('should reset text property', () => {
    expect(component.text).toBeNull();
    component.text = 'some text';
    component.post();
    expect(component.text).toBeNull();
  });
});
