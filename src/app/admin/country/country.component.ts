import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ManageService } from 'src/app/manage.service';
import { AddEditCountryComponent } from '../add-edit-country/add-edit-country.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  displayedColumns: string[] = ['country_id', 'country', 'description','action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  country_count: any
  constructor(
    private dailog: MatDialog,
    private router: Router,
    private manageservice: ManageService,
  ) { }

  ngOnInit(): void {
    this.manageservice.get_country().subscribe(
      (instdata: any) => {
        console.log(instdata)
        this.dataSource = new MatTableDataSource(instdata.data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.country_count = instdata.data.length
      }
    )
  }

  add_country() {
    this.dailog.open(AddEditCountryComponent, {
      disableClose: true
    });
  }


  edit_country(row: any) {
    this.dailog.open(AddEditCountryComponent, {
      data: row
    });
  }

  delete_country(row: any) {
    if (confirm("Are You Sure To Delete")) {
      const deletedata = new FormData();
      deletedata.append('country_id', row.country_id);
      this.manageservice.delete_country(deletedata).subscribe(
        (res: any) => {
          this.router.navigate(['/adminhome/country'])
          alert('data delete successfully')
        }
      )

    }
    else {
      alert('data not delete')
    }

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}