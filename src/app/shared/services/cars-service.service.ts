import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from './User.service';

@Injectable({
  providedIn: 'root'
})
export class CarsServiceService {

  constructor(private http: HttpClient, private userService: UserService) { }

  getType() {
    return this.http.get(environment.serverUrl + "/getType")
  }

  getColor() {
    return this.http.get(environment.serverUrl + "/getColor")
  }

  getFuel() {
    return this.http.get(environment.serverUrl + "/getFuel")
  }

  getTransmission() {
    return this.http.get(environment.serverUrl + "/getTransmission")
  }

  getMake() {
    return this.http.get(environment.serverUrl + "/getMake")
  }

  getModel() {
    return this.http.get(environment.serverUrl + "/getModel")
  }

  searchCar(params: any = {}) {
    return this.http.get(environment.serverUrl + "/searchCar", { params })
  }

  homeCars() {
    return this.http.get(environment.serverUrl + "/homeCars")
  }

  createCar(car: any) {
    return this.http.post(environment.serverUrl + "/createCar", car)
  }

  deleteCar(id: any) {
    return this.http.delete(environment.serverUrl + "/deleteCar/" + id)
  }

  countCar() {
    return this.http.get(environment.serverUrl + "/countCar")
  }

  updateCar(newCar: any) {
    return this.http.put(environment.serverUrl + "/updateCar/" + newCar.id, newCar)
  }

  selectCarById(id: number) {
    return this.http.get(environment.serverUrl + "/selectCarById/" + id)
  }

  addToCart(car_id: number) {
    return this.http.post(environment.serverUrl + '/addToCart', { car_id, user_id: this.userService.loggedUser.id })
  }

  removeAllFromCart() {
    return this.http.delete(environment.serverUrl + '/remove/' + this.userService.loggedUser.id)
  }

  getCarsFromUserCart() {
    return this.http.get<any[]>(environment.serverUrl + '/getCarsFromUserCart/' + this.userService.loggedUser.id)
  }

  addToFavorites(car_id: number) {
    return this.http.post(environment.serverUrl + '/addToFavorites', { car_id, user_id: this.userService.loggedUser.id })
  }

  getCarsFromUserFavorites() {
    return this.http.get<any[]>(environment.serverUrl + '/getCarsFromUserFavorites/' + this.userService.loggedUser.id)
  }

  removeFromCart(car_id: number) {
    return this.http.delete(environment.serverUrl + '/remove/' + car_id + '/' + this.userService.loggedUser.id)
  }

  removeFromFavorites(car_id: number) {
    return this.http.delete(environment.serverUrl + '/removeFromFavorites/' + car_id + '/' + this.userService.loggedUser.id)
  }

  buyFromCart() {
    return this.http.put(environment.serverUrl + "/buyFromCart/" + this.userService.loggedUser.id, {})
  }

  allBoughtCars() {
    return this.http.get(environment.serverUrl + "/allBoughtCars/" + this.userService.loggedUser.id)
  }
}
