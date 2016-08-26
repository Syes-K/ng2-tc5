/**
 * Created by yongsheng.kuang on 16/8/24.
 */
import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import  {Hero} from './hero.class';
import  {HeroService} from './hero.service';
@Component({
    selector: 'my-hero-list',
    template: ` 
        <div>
            this is hero list
            <ul>
                <li *ngFor="let h of heroes" (click)="goDetail(h)">{{h.name}}</li>
            </ul>
        </div>
    `
})
export class HeroListComponent implements OnInit{
    heroes:Hero[];
    constructor(private heroService:HeroService,private router:Router){}
    ngOnInit(){
          this.heroService.getHeroes().then(heroes=>{
            this.heroes = heroes;
         });
    }
    goDetail(h:Hero){
        this.router.navigate(['hero/detail',h.id])
    }
}