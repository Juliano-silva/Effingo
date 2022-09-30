import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  car = {} as Car;
  cars: Car[] | undefined;
  constructor(private carService: CarService) {}
  ngOnInit() {
    this.getCars();
  }
  // defini se um carro será criado ou atualizado
  saveCar(form: NgForm) {
    if (this.car.id !== undefined) {
      this.carService.updateCar(this.car).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.carService.saveCar(this.car).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }
  // Chama o serviço para obtém todos os carros
  getCars() {
    this.carService.getCars().subscribe((cars: Car[]) => {
      this.cars = cars;
    });
  }
  // deleta um carro
  deleteCar(car: Car) {
    this.carService.deleteCar(car).subscribe(() => {
      this.getCars();
    });
  }
  // copia o carro para ser editado.
  editCar(car: Car) {
    this.car = { ...car };
  }
  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getCars();
    form.resetForm();
    this.car = {} as Car;
  }
}

