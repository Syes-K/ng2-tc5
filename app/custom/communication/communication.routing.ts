/**
 * Created by kuangyongsheng on 16/8/24.
 */
import { Routes, RouterModule }  from '@angular/router';
import {CommunicationComponent} from './communication.component';
const r:Routes=[
    {
        path:'',
        component:CommunicationComponent
    }
];

export const  routing=RouterModule.forChild(r);