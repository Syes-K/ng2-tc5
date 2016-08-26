/**
 * Created by kuangyongsheng on 16/8/24.
 */
import {Routes, RouterModule}  from '@angular/router';
import {HeroComponent} from './hero.component';
import {HeroListComponent} from './heroList.component';
import {HeroDetailComponent} from './heroDetail.component';
const heroRoutes:Routes = [
    {
        path: 'hero',
        component: HeroComponent,
        children:[
            {
                path:'',
                redirectTo:'list',
                pathMatch: 'full'
            },
            {
                path:'list',
                component:HeroListComponent
            },
            {
                path:'detail/:id',
                component:HeroDetailComponent
            }
        ]
    }
];

export const routing = RouterModule.forChild(heroRoutes);