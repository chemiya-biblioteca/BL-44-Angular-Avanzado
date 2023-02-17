import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent {
  constructor(private router:Router,public toastr: ToastrService ){}

  navegar(){
    this.router.navigate(["/componenteNavegacion"]).then(() => {
      this.toastr.success('your message', 'Success!!');
  });
  }




  showSuccess(){
   this.toastr.success('everything is broken', 'Major Error', {
  timeOut: 3000,
});
  }
  showError(){
   this.toastr.error('everything is broken', 'Major Error', {
  timeOut: 3000,
});
  }
   showInfo(){
   this.toastr.info('everything is broken', 'Major Error', {
  timeOut: 3000,
});
  }
   showWarning(){
   this.toastr.warning('everything is broken', 'Major Error', {
  timeOut: 3000,
});
  }
 
   
}
