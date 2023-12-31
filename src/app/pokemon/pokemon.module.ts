import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BorderCardDirective } from "./border-card.directive";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { PokemonService } from "./pokemon.service";
import { FormsModule } from "@angular/forms";
import { PokemonFormComponent } from "./pokemon-form/pokemon-form.component";
import { EditPokemonComponent } from "./edit-pokemon/edit-pokemon.component";
import { AddPokemonComponent } from "./add-pokemon/add-pokemon.component";
import { SearchPokemonComponent } from "./search-pokemon/search-pokemon.component";
import { LoaderComponent } from "./loader/loader.component";
import { authGuard } from "../auth.guard";

const pokemonRoutes: Routes = [
  {
    path: "edit/pokemons/:id",
    component: EditPokemonComponent,
    canActivate: [authGuard],
  },
  {
    path: "pokemon/add",
    component: AddPokemonComponent,
    canActivate: [authGuard],
  },
  {
    path: "pokemons",
    component: ListPokemonComponent,
    canActivate: [authGuard],
  },
  {
    path: "pokemons/:id",
    component: DetailPokemonComponent,
    canActivate: [authGuard],
  },
];
@NgModule({
  declarations: [
    BorderCardDirective,
    DetailPokemonComponent,
    ListPokemonComponent,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    LoaderComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(pokemonRoutes)],
  providers: [PokemonService],
})
export class PokemonModule {}
