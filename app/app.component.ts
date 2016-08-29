/**
 * Created by yongsheng.kuang on 16/8/24.
 */
import {Component} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
    selector: 'my-app',
    styles:[`
        :host [routerlink].active{
           color: #a45;
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
    public path: string = '';
    constructor(private router: Router,private activatedRoute: ActivatedRoute) {
        router.events.subscribe((data) => {
            this.path = data.url.substr(1);
        });
    }
}