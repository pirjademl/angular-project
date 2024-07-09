import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-housing-location',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
        <section class=" shadow-sm shadow-gray-500 pb-3 bg-[#e8e7fa]   ">
            <img
                class="aspect-video w-full object-cover border-3 border-green-400  rounded-b-3xl"
                [src]="housingLocation.photo"
                alt="Exterior photo of {{ housingLocation.name }}"
                crossorigin
            />
            <h2 class="text-xl font-semibold p-1 text-purple-700/50">
                {{ housingLocation.name }}
            </h2>
            <p class="flex items-center gap-1">
                <img src="/location-pin.svg" />
                {{ housingLocation.city }}, {{ housingLocation.state }}
            </p>
            <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
        </section>
    `,
})
export class HousingLocationComponent {
    @Input() housingLocation!: HousingLocation;
}
