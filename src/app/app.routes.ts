
import { RouterModule , Routes } from '@angular/router';
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroesEditComponent } from "./components/heroes-edit/heroes-edit.component";


const app_routes: Routes =[
	{path:'heroes', component:HeroesComponent},
	{path:'heroe/:id', component:HeroesEditComponent},

	{path:'**',pathMatch:'full', redirectTo:'home'}
]

export const APP_ROUTING = RouterModule.forRoot(app_routes);