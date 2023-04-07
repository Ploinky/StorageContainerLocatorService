import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Container } from 'types';
import { ContainersService } from '../containers.service';

@Component({
  selector: 'app-add-container',
  templateUrl: './add-container.component.html',
  styleUrls: ['./add-container.component.scss']
})
export class AddContainerComponent {
    constructor(private containersService: ContainersService) {}

    model = { } as Container;

    onSubmit(f: NgForm) {
        this.containersService.addContainer({ name: `${f.value.name}` ?? 'Default Container Name' });

        f.resetForm();
    }
}
