import { Plugins, StatusBarStyle } from '@capacitor/core';
import {IonContent,IonHeader,IonIcon,IonItem,IonLabel,IonList,IonMenu,IonMenuToggle,IonRouterContext,IonTitle,IonToolbar,} from '@ionic/react';
import { useContext, useEffect, useState } from 'react';
import { cog, flash, list } from 'ionicons/icons';
import { useHistory, useLocation } from 'react-router-dom';

const pages = [
  {
    title: 'Feed',
    icon: flash,
    url: '/tabs/feed',
  },
  {
    title: 'Lists',
    icon: list,
    url: '/tabs/lists',
  },
  {
    title: 'Settings',
    icon: cog,
    url: '/tabs/settings',
  },
];

const Menu = () => {


  return (
    <IonMenu side="start" contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {pages.map(p => (
            <IonMenuToggle autoHide={false}>
              <IonItem routerLink={p.url} routerDirection="none" detail={false} lines="none">
                <IonIcon icon={p.icon} slot="start" />
                <IonLabel>{p.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
