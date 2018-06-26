import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import 'rxjs/Rx';

@Injectable()
export class HeroesService {
	// Url de nuestro servicio de firebase
	heroesUrl="*********"
	//Url para modificar el registro del heroe
	heroeUrl="***********"
  constructor(private http:Http) {}

  nuevoHeroe(heroe:Heroe){

  	let body = JSON.stringify(heroe);
  	let headers = new Headers({
  		'Content-Type':'application/json'
  	});

  	return this.http.post(this.heroesUrl , body , { headers}).map( res=>{
  		console.log(res.json());
  		return res.json();
  	});

  }


  actualizarHeroe(heroe:Heroe,key$:string){

  	let body = JSON.stringify(heroe);
  	let headers = new Headers({
  		'Content-Type':'application/json'
  	});

  	let url = `${ this.heroeUrl}/${ key$ }.json`;

  	return this.http.put(url , body , { headers}).map( res=>{
  		console.log(res.json());
  		return res.json();
  	});

  }

  getHeroe(key$:string){
  	 let url = `${ this.heroeUrl}/${ key$ }.json`;
  	 return this.http.get(url).map(resp=>resp.json());
  }
  //Pintar los heroes en la tabla
   getHeroes(){
  	 return this.http.get(this.heroesUrl).map(resp=>resp.json());
  }

  borrarHeroeService(key$:string){
  	 let url = `${ this.heroeUrl}/${ key$ }.json`;
  	 return this.http.delete(url).map(res=>res.json())

  }



}
