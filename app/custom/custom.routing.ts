/**
 * Created by kuangyongsheng on 16/8/24.
 */
import { Routes, RouterModule }  from '@angular/router';
import {CustomComponent} from './custom.component';
const customRoutes:Routes=[
    {
        path:'',
        component:CustomComponent
    }
];

export const  routing=RouterModule.forChild(customRoutes);