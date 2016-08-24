/**
 * Created by kuangyongsheng on 16/8/24.
 */
import {Routes, RouterModule}  from '@angular/router';
import {HeroComponent} from './hero.component';
import {HeroListComponent} from './heroList.component';
const heroRoutes:Routes = [
    {
        path: '',
        component: HeroComponent,
        children:[
            // {
            //     path:'',
            //     redirectTo:'list',
            //     pathMatch: 'full'
            // },
            {
                path:'',
                component:HeroListComponent
            }
        ]
    }
];

export const routing = RouterModule.forChild(heroRoutes);