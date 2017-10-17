import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {ResourceService} from "../../services/resource-service";
import {ConfigService} from "../../services/config-service";

@Component({
  selector: 'pagination',
  templateUrl: './pagination.html',
  styleUrls: ['./pagination.css']
})

export class Pagination {

  private pageNumber:number;
  private range:number;
  public pageNumbers:Array<any>;

  constructor(public resource:ResourceService,
              public config:ConfigService) {
    this.pageNumber = 1;
    this.range = this.config.rows || 10;
    this.pageNumbers = [];
    ResourceService.getPipedData().subscribe(data => {
      this.numberOfItems = data;
      this.updateNumberPerPage();
    });
  }

  public emitPaginationProperties():void {
    this.updateRange.emit({range: this.range, page: this.pageNumber});
  }

  public updateNumberPerPage():void {
    // issue #5
    // if (this.range > this.numberOfItems && this.numberOfItems > 0) {
    //   this.range = this.numberOfItems;
    // }
    let numberPerPage = Math.ceil(this.numberOfItems / this.range);
    this.pageNumbers = Array(numberPerPage).fill(numberPerPage, 0).map((_, i) => i + 1);
  }

  public updatePagination():void {
    this.updateNumberPerPage();
    this.emitPaginationProperties();
  }

  public isActiveRange(currentRange:Number):boolean {
    return currentRange === this.range;
  }

  public isActivePage(currentPage:Number):boolean {
    return currentPage === this.pageNumber;
  }

  public nextPage(event):void {
    event.preventDefault();
    if (!this.isLastPage()) {
      this.pageNumber++;
    }
  }

  public previousPage(event):void {
    event.preventDefault();
    if (!this.isFirstPage()) {
      this.pageNumber--;
    }
  }

  public isLastPage():boolean {
    return this.pageNumber === this.pageNumbers.length;
  }

  public isFirstPage():boolean {
    return this.pageNumber === 1;
  }

  @Input() numberOfItems:number;
  @Output() updateRange = new EventEmitter();

  ngOnChanges() {
    this.updatePagination();
  }

  changeRange(event, number):void {
    event.preventDefault();
    this.range = number;
    this.pageNumber = 1;
    this.updatePagination();
  }

  changePage(event, numberOfPage):void {
    event.preventDefault();
    this.pageNumber = numberOfPage;
    this.updatePagination();
  }
}
