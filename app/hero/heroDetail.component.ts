/**
 * Created by yongsheng.kuang on 16/8/25.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HeroService} from './hero.service';
import {Hero} from './hero.class';


@Component({
    selector: 'my-hero-detail',
    template: `
        <div>
            this is  detail
            
            <input type="text" [(ngModel)]="hero.name" *ngIf="hero">
           
            <button (click)="update()" >save</button>
            <button (click)="back()" >back</button>
        </div>
    `
})
export class HeroDetailComponent {
    private hero:Hero;

    constructor(private router:ActivatedRoute, private heroService:HeroService) {
    }

    ngOnInit() {
        this.router.params.forEach((params:Params)=> {
            if (params['id'] !== undefined) {
                let id = +params['id'];
                this.heroService.getHero(id).then(h=>this.hero = h);
            }
        });
    }
    back(){
        window.history.back();
    }
    update(){
        this.heroService.update(this.hero).then(()=>this.back());
    }
}