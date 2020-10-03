import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {
	Plugins,
	LocalNotificationEnabledResult,
	LocalNotificationActionPerformed,
	LocalNotification,
	Device
} from '@capacitor/core';
const { LocalNotifications } = Plugins;

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: [ 'home.page.scss' ]
})
export class HomePage implements OnInit {
	constructor(private alertCtrl: AlertController) {}

	async ngOnInit() {
		await LocalNotifications.requestPermission();
	}

	async scheduleBasic() {
		var hi = 'asdfsadf';
		LocalNotifications.schedule({
			notifications: [
				{
					title: 'Friendly Reminder',
					body: 'Join the Army',
					id: 1,
					extra: {
						data: 'Pass data to your handler'
					},
					iconColor: '#0000FF'
				}
			]
		});
	}

	async scheduleAdvanced() {}

	async presentAlert(header, message) {
		const alert = await this.alertCtrl.create({
			header,
			message,
			buttons: [ 'OK' ]
		});

		await alert.present();
	}
}
