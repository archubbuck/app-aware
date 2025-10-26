import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Message } from './message';
import { Message as MessageModel } from '../../models/message.model';

describe('Message', () => {
  let component: Message;
  let fixture: ComponentFixture<Message>;

  const mockMessage: MessageModel = {
    id: '1',
    content: 'Test message',
    sender: 'user',
    timestamp: new Date()
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Message]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Message);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('message', mockMessage);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
