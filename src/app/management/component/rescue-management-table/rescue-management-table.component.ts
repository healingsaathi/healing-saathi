import { Component } from '@angular/core';
import { ManagementApiService } from '../../services';

@Component({
  selector: 'app-rescue-management-table',
  templateUrl: './rescue-management-table.component.html',
  styleUrls: ['./rescue-management-table.component.scss']
})
export class RescueManagementTableComponent {
  constructor(private api: ManagementApiService){

  }
  readData: any;
  ngOnInit(): void {
    this.getAlldata();
  }
  //deleteRescueDataRecord
  deleteRescueRow(tagnumber: any){
    this.api.deleteRescueData(tagnumber).subscribe((res) => {
      console.log(res, 'deleted Id No')
      this.getAlldata();
    });
  }

  getAlldata(){
    //instance all data
    this.api.getAllRescueData().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData = res.data;
    });
  }
}

