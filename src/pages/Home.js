import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Card from './Card';

class Home extends React.Component {
	render() {
		return (
			<IonPage>
				<IonHeader>
					<IonToolbar>
						<IonTitle>Ionic Blank</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent className="ion-padding">
					The world is your oyster.
					<Card/>
					<p>
						If you get lost, the{' '}
						<a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/">
							docs
						</a>{' '}
						will be your guide.
					</p>
				</IonContent>
			</IonPage>
		)
	}
}

export default Home;
