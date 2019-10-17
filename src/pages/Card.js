import React from 'react'
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel, IonApp, IonHeader, IonToolbar, IonTitle } from '@ionic/react';


class Card extends React.Component {
	render() {
		return(
			<IonContent>
				<IonApp>
			    <IonHeader translucent>
			      <IonToolbar>
			        <IonTitle>Card</IonTitle>
			      </IonToolbar>
			    </IonHeader>,
			    <IonContent fullscreen>
			      <IonCard>
			        <img src="https://images.unsplash.com/photo-1571253466461-fda63ff89385?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" />
			        <IonCardHeader>
			          <IonCardSubtitle>Destination</IonCardSubtitle>
			          <IonCardTitle>Madison, WI</IonCardTitle>
			        </IonCardHeader>
			        <IonCardContent>
			          Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
			        </IonCardContent>
			      </IonCard>
			    </IonContent>
			  </IonApp>
			</IonContent>
		)
	}
}

export default Card
