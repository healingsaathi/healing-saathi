import { Component, OnInit } from '@angular/core';
import { ManagementApiService } from '../../services';
import { FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-rescue-management',
  templateUrl: './rescue-management.component.html',
  styleUrls: ['./rescue-management.component.scss'],
})
export class RescueManagementComponent implements OnInit{
  constructor(private api: ManagementApiService){
  }
  ngOnInit(): void {
  }

  rescueForm = new FormGroup({
    'tagnumber': new FormControl('', Validators.required),
    'dogname': new FormControl('',Validators.required),
    'colourname': new FormControl('', Validators.required),
    'intialsymptom': new FormControl('',Validators.required),
    'takento': new FormControl('',Validators.required),
    'intialactiontaken': new FormControl('',Validators.required),
    'locationdetails': new FormControl('',Validators.required)
  });

  rescueSubmit(){
    if(this.rescueForm.valid){
      console.log(this.rescueForm.value);
      this.api.createRescueData(this.rescueForm.value).subscribe((res)=>{
        console.log(res, 'Data Added Successfully');
      this.rescueForm.reset();
      });
    }
    else{
      console.log('Error');
    }
  }
}
