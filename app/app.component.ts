/**
 * Created by yongsheng.kuang on 16/8/24.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    styles:[`
        [routerlink].active{
            border: 3px #9a2330 solid;
            border-radius: 5px;
        }
    `],
    template: `
        <h1>this is my App</h1>
        <a  routerLink="/hero" routerLinkActive="active"> hero</a>
        <a  routerLink="/custom" routerLinkActive="active"> custom</a>
        <div>
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent {
}