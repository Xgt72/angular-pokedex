import { Component } from "@angular/core";

@Component({
  selector: "app-page-not-found",
  template: `
    <div class="text-center">
      <img
        src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"
      />
      <h1 class="text-6xl font-bold">Hey, cette page n'existe pas !</h1>
      <a routerLink="/pokemons"
        ><button class="m-4 p-4 rounded-lg hover:bg-gray-300">
          Retourner à l'accueil
        </button></a
      >
    </div>
  `,
})
export class PageNotFoundComponent {}
