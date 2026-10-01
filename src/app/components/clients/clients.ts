import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  standalone: true,
  templateUrl: './clients.html',
  styleUrl: './clients.scss'
})
export class ClientsComponent {
  clients = [
    { name: 'Newfront Group', image: 'clients/newfront-group.jpg' },
    { name: 'Prabhavee Group', image: 'clients/prabhavee-group.jpg' },
    { name: 'Samarth Builders', image: 'clients/samarth-builders.jpg' },
    { name: 'Nandan Building Confidence', image: 'clients/nandan.jpg' },
    { name: 'Monaarch Buildcon & Infrastructure Pvt Ltd', image: 'clients/monaarch.jpg' }
  ];
}
