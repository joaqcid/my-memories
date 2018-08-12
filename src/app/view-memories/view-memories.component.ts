import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ViewMemoriesDataSource, ViewMemoriesItem } from './view-memories-datasource';
import { AngularFireDatabase } from 'angularfire2/database';
import { pipe, Subscription } from 'rxjs';
import { map, first } from 'rxjs/operators';

@Component({
  selector: 'app-view-memories',
  templateUrl: './view-memories.component.html',
  styleUrls: ['./view-memories.component.scss']
})
export class ViewMemoriesComponent implements OnInit, OnDestroy {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ViewMemoriesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['date', 'text'];
  subscription: Subscription;

  constructor(private db: AngularFireDatabase) {

  }

  ngOnInit() {
    this.subscription = this.db.list<ViewMemoriesItem>('memories').valueChanges().pipe(first()).subscribe(d=>{
      console.log('data streaming');
      this.dataSource = new ViewMemoriesDataSource(this.paginator, this.sort);    
      this.dataSource.data = d;
    });    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
