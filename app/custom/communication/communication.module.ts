/**
 * Created by kuangyongsheng on 16/8/26.
 */
/**
 * Created by kuangyongsheng on 16/8/24.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {routing} from './communication.routing';

import {CommunicationComponent} from './communication.component';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations:[CommunicationComponent]
})
export  class CommunicationModule{}