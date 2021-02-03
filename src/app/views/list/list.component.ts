import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  nameFilter = '';
  selectedPkm = null;
  get pokemonList() {
    return this.pokeApi.pokeList.filter(pokemon => {
      return pokemon.name.toLocaleLowerCase().indexOf(this.nameFilter.toLocaleLowerCase()) !== -1
    })
  }

  get pkmSprite() {
    const number = ('000' + this.selectedPkm.number).slice(-3);
    return `//serebii.net/sunmoon/pokemon/${number}.png`
  }

  constructor(
    private pokeApi: PokemonsService
  ) { }

  ngOnInit(): void {
    this.pokeApi.listAll()
  }

  selectPokemon(pkm) {
    console.log(pkm)
    this.selectedPkm = pkm
  }

}
