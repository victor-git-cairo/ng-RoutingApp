import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string }; 
  serverName = '';
  serverStatus = '';
  allowEdit =  false;

  constructor(private serversService: ServersService, 
              private route: ActivatedRoute  ) { }

  ngOnInit() {

    console.log(this.route.snapshot.fragment);
    console.log( this.route.snapshot.queryParams);

    // will check if anything changed 
    // https://stackoverflow.com/questions/47455734/how-to-get-query-parameters-from-url-in-angular-5

    this.route.queryParams
        .subscribe(params => {
          console.log(params)
          this.allowEdit = params['allowEdit'] === 1 ? true : false
    });


    this.route.fragment.subscribe();
    this.server = this.serversService.getServer(1)!;
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
