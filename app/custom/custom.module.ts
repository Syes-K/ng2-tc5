/**
 * Created by kuangyongsheng on 16/8/24.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {routing} from './custom.routing';

import {CustomComponent} from './custom.component';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations:[CustomComponent],
    bootstrap:[CustomComponent]
})
export  class CustomModule{}