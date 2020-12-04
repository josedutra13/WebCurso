import { ApiServiceService } from './services/api-service.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  
  error:String
  data: String

  constructor(private apiService:ApiServiceService){}

   dataGet(){
     this.apiService.getData().subscribe((data) =>{
       console.log(data)
       this.data = data
     },(error) => {
       console.log(error)
       this.error = error
     })
   }
}
