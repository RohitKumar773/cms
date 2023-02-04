import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLinkWithHref } from '@angular/router';
import { AddEditTakeAddmissionComponent } from '../add-edit-take-addmission/add-edit-take-addmission.component';
import { AddEditStudentComponent } from 'src/app/institute/add-edit-student/add-edit-student.component';

import { ThemePalette } from '@angular/material/core';
import { ManageService } from 'src/app/manage.service';



@Component({
  selector: 'app-take-addmission',
  templateUrl: './take-addmission.component.html',
  styleUrls: ['./take-addmission.component.css']
})
export class TakeAddmissionComponent implements OnInit {
  displayedColumns: string[] = ['admission_id', 'regist_no', 'std_name','roll_no', 'std_whatsapp_no','course_id_fk','batch_id_fk','admission_date','admission_status'];
  dataSource = new MatTableDataSource();
  count_admission:number=0;
  color: ThemePalette='primary'
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  tabledata: any;
  paginatorRef: any;

  constructor(
    private dailog: MatDialog,
    private router: Router,
    private service: ManageService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit(): void {
    this.service.get_admission().subscribe(
      (res: any) => {
        console.log(res)
        this.dataSource.data = res.data
        this.dataSource.sort = this.sort;
        this.count_admission = res.data.length
      }
    )
  }
  take_addmission() {
    this.dailog.open(AddEditTakeAddmissionComponent, {
      disableClose: true
    });
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}