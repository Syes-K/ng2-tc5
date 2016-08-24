/**
 * Created by yongsheng.kuang on 16/8/24.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'my-hero',
    template: `
        <h3>this is hero </h3>
        <router-outlet></router-outlet>
    `
})
export class HeroComponent {

}