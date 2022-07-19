import {  Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';

declare global {
  interface Window {
      WebChat: any;
  }
}

window.WebChat = window.WebChat || {};

@Component({
  selector: 'app-bot',
  templateUrl: './bot.page.html',
  styleUrls: ['./bot.page.scss'],
})
export class BotPage implements OnInit{

  @ViewChild('botWindow', {static: true}) botWindowElement: ElementRef;
  logoTitulo = '/assets/img/logoAnsv.png';
  prudencia = '/assets/img/prudencia.png';

  botCargado = false;

  //url2 = 'https://ansv.maps.arcgis.com/apps/webappviewer/index.html?id=feb6a00fe5e44aa59138442a1f1764f6';

  constructor( private platform: Platform, private route: Router) {
    this.prudencia = '/assets/img/prudencia.png';

  }


  ngOnInit() {

    const styleSet = window.WebChat.createStyleSet({

			bubbleFromUserBackground: '#0BB5E0',
			bubbleFromUserTextColor: 'white',

			//bubbleBackground: 'rgba(0, 0, 255, .1)',
			bubbleTextColor: '#1D2444',
			// Avatar
			botAvatarImage: 'https://ansv.gov.co/sites/default/files/ansvbot-chat/favicon-ansv_.svg',
			botAvatarInitials: 'BF',
			userAvatarImage: 'https://ansv.gov.co/sites/default/files/imagenes/favicon-ansv.png',
			userAvatarInitials: 'WC',

			rootHeight: '100%',
			rootWidth: '100%',

      bubbleBorderRadius:10,
      bubbleFromUserBorderRadius:10,

      sendBoxBackground: 'white',
      sendBoxTextColor: 'black',
    });

    styleSet.textContent = {
			...styleSet.textContent,
			fontSizeSmall: '80%',
			fontFamily: '\'Futura PT\'',
			fontWeight: 'normal',

		};

    const store = window.WebChat.createStore(
      {},
      ({ dispatch }) => next => action => {
          if (action.type === 'DIRECT_LINE/CONNECT_FULFILLED') {
             dispatch({
                 meta: {
                      method: 'keyboard',
                  },
                  payload: {
                      activity: {
                            channelData: {
                                 postBack: true,
                            },
                             //Web Chat will show the 'Greeting' System Topic message which has a trigger-phrase 'hello'
                             name: 'startConversation',
                             type: 'event'
                        },
                   },
                   type: 'DIRECT_LINE/POST_ACTIVITY',
              });
        }
        return next(action);
      }
    );

    const directLine = window.WebChat.createDirectLine({
      secret: 'aFOSPQXpcbg.MKbF490lS93cuvKCa4rUGdOP-QoicEyzcCp5rPEaq0k',
      webSocket: false
    });

    window.WebChat.renderWebChat(
      {
          directLine,
          userID: 'ea29c9a7-7298-412d-8e97-b20adfc0833b',
          username: 'Prudencia Chat Bot',
          locale: 'es',
          styleSet,
          store,
          styleOptions: {
            hideUploadButton: true
          }
      },
      this.botWindowElement.nativeElement
    );

    directLine
      .postActivity({
          from: { id: 'ea29c9a7-7298-412d-8e97-b20adfc0833b', name: 'Prudencia Chat Bot' },
          name: 'requestWelcomeDialog',
          type: 'event',
          value: 'token'
      })
      .subscribe(
          id => console.log(`Posted activity, assigned ID ${id}`),
          error => console.log(`Error posting activity ${error}`)

      );
      this.botCargado = true;
  }


  regresar(): void {
    this.route.navigate(['/home']);
  }




}

