import { Component, Input } from '@angular/core';
import { Container } from 'types';
import { ContainersService } from '../containers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
    container: Container | null = null;

    constructor(private containersService: ContainersService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        const containerId = this.route.snapshot.paramMap.get('containerId');
        this.containersService.getContainer(Number(containerId!)).then((c) => this.container = c).catch(() => this.container = null);
    }
}
