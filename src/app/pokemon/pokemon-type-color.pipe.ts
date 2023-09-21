import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "pokemonTypeColor",
})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(type: string): string {
    let color: string;

    switch (type) {
      case "Feu":
        color = "bg-red-500";
        break;
      case "Eau":
        color = "bg-blue-500";
        break;
      case "Plante":
        color = "bg-green-500";
        break;
      case "Insecte":
        color = "bg-yellow-700";
        break;
      case "Normal":
        color = "bg-gray-200";
        break;
      case "Vol":
        color = "bg-blue-200";
        break;
      case "Poison":
        color = "bg-purple-500";
        break;
      case "Fée":
        color = "bg-pink-400";
        break;
      case "Psy":
        color = "bg-purple-600";
        break;
      case "Electrik":
        color = "bg-yellow-300";
        break;
      case "Combat":
        color = "bg-orange-500";
        break;
      default:
        color = "bg-grey-500";
        break;
    }
    return color;
  }
}
