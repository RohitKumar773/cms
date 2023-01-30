import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ManageService } from 'src/app/manage.service';


@Component({
  selector: 'app-insbatch',
  templateUrl: './insbatch.component.html',
  styleUrls: ['./insbatch.component.css']
})
export class InsbatchComponent implements OnInit {
  displayedColumns: string[] = ['institute_id', 'institute_name', 'institute_owner', 'institute_whatsapp','institute_email','institute_course','total_batch'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  batch_count:any
  constructor(
    private dailog: MatDialog,
    private manageservice:ManageService
  ) {
  }

  ngOnInit(): void {
    this.manageservice.institute_view().subscribe(
      (instdata: any) => {
        console.log(instdata)
        this.dataSource = new MatTableDataSource(instdata.data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.batch_count = instdata.data.length
      }
    )
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 
}

