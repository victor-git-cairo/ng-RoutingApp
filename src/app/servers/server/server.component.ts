import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, 
              private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id)!;
    
    // will listen when a route change occurs 
    this.route.params
    .subscribe(
      ( params: Params ) => {
        const id = +this.route.snapshot.params['id'];
        this.server = this.serversService.getServer(id)!;
      }
    )
   }

   onEdit() {
     this.router.navigate(['edit'],{ relativeTo: this.route})
   }
}
