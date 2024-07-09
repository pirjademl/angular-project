import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { NgFor } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, HousingLocationComponent],
    template: `<section class="px-3">
            <form>
                <input
                    type="text"
                    class="p-[5px] border mr-[4px] mt-2 inline-block w-[30%] border-gray-400 focus:none outline-none"
                    placeholder="filter by city"
                    #filter
                />
                <button
                    class="bg-gray-400 py-[5px] px-4"
                    type="button"
                    (click)="filterResults(filter.value)"
                >
                    search
                </button>
            </form>
        </section>
        <section
            class="mt-4 px-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2"
        >
            <app-housing-location
                *ngFor="let housingLocation of filteredLocationList"
                [housingLocation]="housingLocation"
            >
            </app-housing-location>
        </section> `,
})
export class HomeComponent {
    //static data
    readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
    housingLocationList: HousingLocation[] = [];
    filteredLocationList: HousingLocation[] = [];
    housingService: HousingService = inject(HousingService);
    filterResults(text: string) {
        if (!text) {
            this.filteredLocationList = this.housingLocationList;
            return;
        }
        this.filteredLocationList = this.housingLocationList.filter(
            (housingLocation) =>
                housingLocation?.city
                    .toLowerCase()
                    .includes(text.toLowerCase()),
        );
    }

    constructor() {
        this.housingLocationList = this.housingService.getAllHousingLocations();
        this.filteredLocationList = this.housingLocationList;
    }
}
