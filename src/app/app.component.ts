import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [HomeComponent, RouterModule, RouterLink],
    template: `<main>
        <header
            class="bg-[#27233A] p-2 text-[whitesmoke] flex justify-between items-center sticky top-0 "
        >
            <a [routerLink]="['/']">
                <img src="/logo.svg" />
            </a>
        </header>
        <section>
            <router-outlet></router-outlet>
        </section>
    </main>`,
})
export class AppComponent {
    title = 'homes';
}
