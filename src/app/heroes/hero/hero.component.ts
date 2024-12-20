import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'iroman';
  public age: number = 42;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }


  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    // TODO
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 45;
  }

  resetForm(): void {
    this.name = 'iroman';
    this.age = 42;

    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // });
  }

}
