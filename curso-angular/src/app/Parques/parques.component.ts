import {Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck} from '@angular/core';

@Component({
    selector: 'parques',
    templateUrl: './parques.component.html',
    styleUrls: ['./parques.component.css']
})

export class ParquesComponent implements OnChanges, OnInit, DoCheck{
    @Input() nombre: string; 
    @Input('metros_cuadrados') metros: number;
    public vegetacion: string
    public abierto: boolean;

    @Output() pasameLosDatos = new EventEmitter();

    constructor(){
        this.nombre = 'Parque natural para caballos';
        this.metros = 450;
        this.vegetacion = 'Alta';
        this.abierto = true;
    }

    ngOnChanges(changes: SimpleChanges){
        //console.log(changes);
        console.log("Existen cambios en las propiedades.");
    }

    ngOnInit(){
        console.log("Método OnInit Lanzado.");
    }

    ngDoCheck(){
        console.log("Se ejecutó doCheck en ParquesComponent.");
    }

    emitirEvento(){
        this.pasameLosDatos.emit({
            'nombre':this.nombre,
            'metros':this.metros,
            'vegetacion':this.vegetacion,
            'abierto':this.abierto
        });
    }
}
