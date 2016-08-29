/**
 * Created by kuangyongsheng on 16/8/24.
 */
import { Routes, RouterModule }  from '@angular/router';
import {CustomComponent} from './custom.component';
const customRoutes:Routes=[
    {
        path:'',
        component:CustomComponent,
        children:[
            {
                path:'',
                redirectTo:'communication',
                pathMatch: 'full'
            },
            {
                path:'communication',
                loadChildren:'app/custom/communication/communication.module#CommunicationModule'
            },
            {
                path:'element',
                loadChildren:'app/custom/element/element.module#ElementModule'
            }
        ]
    }

];

export const  routing=RouterModule.forChild(customRoutes);