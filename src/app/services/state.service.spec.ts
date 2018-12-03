import { TestBed } from '@angular/core/testing';
import { StateService } from './state.service';
import { Subject } from 'rxjs';

describe('StateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StateService = TestBed.get(StateService);
    expect(service).toBeTruthy();
  });

  it('state should be defined', () => {
    const service: StateService = TestBed.get(StateService);
    expect((service as any).state).toEqual({});
  });

  it('check setValue and getValue methods', () => {
    const service: StateService = TestBed.get(StateService);
    (service as any).state.test = new Subject<any>();
    spyOn((service as any).state.test, 'next');
    service.setValue('test', {});
    expect((service as any).state.test.next).toHaveBeenCalledWith({});
    service.getValue('test');
    expect((service as any).state.test.next).toBeDefined({});
  });
});
