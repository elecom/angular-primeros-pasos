import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroName: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  public deletedHero?: string;
  removeLastHero(): void {
    this.deletedHero = this.heroName.pop();
  }

  restoreHeroes(): void {
    this.heroName = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
    this.deletedHero = undefined;
  }
}
