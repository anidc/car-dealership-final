import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-car-card',
    templateUrl: 'car-card.component.html',
    styleUrls: ["car-card.component.scss"]
})

export class CarCardComponent implements OnInit {

    @Input() cart = false
    @Input() favorite = false
    @Input() car: any = {}

    @Output() remove = new EventEmitter()

    constructor(private router: Router) { }

    ngOnInit() { }

    showDetails(id: number) {
        this.router.navigateByUrl("/car/" + id)
    }

    removeEmit(event: any) {
        event.stopPropagation();
        this.remove.emit(this.car.id)
    }
}