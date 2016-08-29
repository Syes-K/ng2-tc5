/**
 * Created by yongsheng.kuang on 16/8/24.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'my-custom',
    template: `
        <div>
            <hr>
            <a routerLink="communication" routerLinkActive="active">communication</a>
            <a routerLink="element" routerLinkActive="active">element</a>
            <router-outlet></router-outlet>
        </div>
    `
})
export class CustomComponent {

}