import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

 heroes:any[]=[];
 loading:boolean=true;
	

  constructor(private _heroesService:HeroesService) {

  		this._heroesService.getHeroes().subscribe(data=>{
  			console.log(data);
			this.heroes = data;  
			this.loading=false;			
  		})

   }

  ngOnInit() {
  }

  borrarHeroe(key$:string){
  	this._heroesService.borrarHeroeService(key$).subscribe(resp=>{
  		if(resp){
  			  console.error(resp);
  		}else{
  			//todo bien
  			delete this.heroes[key$];
  		}
  	});
  }

}
