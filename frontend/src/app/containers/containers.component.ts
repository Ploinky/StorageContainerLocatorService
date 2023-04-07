import { Component } from '@angular/core';
import { ContainersService } from '../containers.service';
import { Container } from 'types/container';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.scss']
})
export class ContainersComponent {
    containers: Container[] = [];

    constructor(private containersService: ContainersService) {}

    getContainers(): void {
        this.containersService.getContainers()
        .then(c => this.containers = c);
    }

    ngOnInit(): void {
        this.getContainers();
    }
}
