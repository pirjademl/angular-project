import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-details',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    template: `
        <article
            class="flex flex-col bg-[#505168] w-full md:flex-row    h-screen  gap-3"
        >
            <section class="">
                <img
                    class="listing-photo aspect-video object-cover h-screen "
                    [src]="housingLocation?.photo"
                    alt="Exterior photo of {{ housingLocation?.name }}"
                    crossorigin
                />
            </section>
            <section class="w-[50%]">
                <div>
                    <h2 class="text-[royalblue] text-3xl font-semibold">
                        {{ housingLocation?.name }}
                    </h2>
                    <p
                        class="listing-location text-xl font-bold text-[royalblue]"
                    >
                        {{ housingLocation?.city }},
                        {{ housingLocation?.state }}
                    </p>
                </div>
                <div class="font-xs ">
                    <h2 class="text-xl leading p-1">
                        About this housing location
                    </h2>
                    <ul class="flex flex-col gap-1">
                        <li>
                            Units available:
                            <span class="bg-gray-500 px-1 py-[4px] text-white">
                                {{ housingLocation?.availableUnits }}
                            </span>
                        </li>
                        <li>
                            Does this location have wifi:
                            {{ housingLocation?.wifi }}
                        </li>
                        <li>
                            Does this location have laundry:
                            {{ housingLocation?.laundry }}
                        </li>
                    </ul>
                </div>
                <div class="listing-apply  w-full px-3  ">
                    <h2 class="section-heading text-3xl mt-4 ">
                        Apply now to live here
                    </h2>
                    <form
                        class="flex flex-col w-full gap-1"
                        [formGroup]="applyForm"
                        (submit)="submitApplication()"
                    >
                        <label for="first-name">First Name</label>
                        <input
                            id="first-name"
                            type="text"
                            formControlName="firstName"
                            placeholder="John"
                            class="bg-transparent border-[#27233A] py-1 text-xl border-2 outline-none focus:none text-center"
                        />
                        <label for="last-name">Last Name</label>
                        <input
                            class="bg-transparent border-[#27233A] py-1 text-xl border-2 outline-none focus:none text-center"
                            id="last-name"
                            type="text"
                            placeholder="Doe"
                            formControlName="lastName"
                        />
                        <label for="email">Email</label>
                        <input
                            class="bg-transparent border-[#27233A] py-1 text-xl border-2 outline-none focus:none text-center"
                            id="email"
                            type="email"
                            placeholder="mail@Domain.com"
                            formControlName="email"
                        />
                        <button
                            class="bg-[#B8B8D1] px-3 py-1 w-full text-center font-bold text-leading outline-none focus:none "
                            type="submit"
                        >
                            Apply now
                        </button>
                    </form>
                </div>
            </section>
        </article>
    `,
})
export class DetailsComponent {
    route: ActivatedRoute = inject(ActivatedRoute);
    housingService = inject(HousingService);
    housingLocation: HousingLocation | undefined;
    housingLocationId = -1;
    applyForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
    });
    constructor() {
        const housingLocationId = Number(this.route.snapshot.params['id']);
        this.housingLocation =
            this.housingService.getHousingLocationById(housingLocationId);
    }
    submitApplication() {
        this.housingService.submitApplication(
            this.applyForm.value.firstName ?? '',
            this.applyForm.value.lastName ?? '',
            this.applyForm.value.email ?? '',
        );
    }
}
