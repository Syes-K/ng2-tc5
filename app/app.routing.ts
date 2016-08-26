/**
 * Created by kuangyongsheng on 16/8/24.
 */
import {Routes,RouterModule} from '@angular/router';

import {HeroComponent} from './hero/hero.component';
const  appRoutes:Routes =[
    {path:'',redirectTo: '/hero',
        pathMatch: 'full'},
    // {path:'hero',loadChildren:'app/hero/hero.module#HeroModule'},
    {path:'custom',loadChildren:'app/custom/custom.module#CustomModule'}
];
export const appRoutingProviders: any[] = [
];
export const routing = RouterModule.forRoot(appRoutes);
