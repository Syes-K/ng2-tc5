/**
 * Created by kuangyongsheng on 16/8/24.
 */
import { Routes, RouterModule }  from '@angular/router';
import {ElementComponent} from './element.component';
const r:Routes=[
    {
        path:'',
        component:ElementComponent
    }
];

export const  routing=RouterModule.forChild(r);