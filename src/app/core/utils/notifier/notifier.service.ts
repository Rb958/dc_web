import {Injectable} from '@angular/core';
import {Notifier} from './notifier';
import {NotificationType} from './notification-type';
import {Notification} from './notification';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  public notifier: Notifier = new Notifier();

  notify(message: string, title: string, notiticationType: NotificationType = NotificationType.DEFAULT, duration: number = 8000) {
    const notification = new Notification(message, title, notiticationType);

    const dismiss = () => {
      new Promise<void>((resolve) => setTimeout(resolve, duration)).then(() => {
        this.notifier.destroy(notification);
        console.info("Notify has been closed");
      });
    };
    console.info("Notify has been called");
    this.notifier.add(notification);

    dismiss();
  }
}
