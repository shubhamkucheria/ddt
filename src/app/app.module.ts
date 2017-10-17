import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { TableComponent } from './app.component';
import { GlobalSearch } from "./components/global-search/global-search.component";
import { CsvExport } from "./components/dropdown/csv-export.component";
import { Header } from "./components/header/header.component";
import { Pagination } from "./components/pagination/pagination.component";
import { SearchPipe } from "./pipes/header-pipe";
import { PaginationPipe } from "./pipes/pagination-pipe";
import { GlobalSearchPipe } from "./pipes/global-search-pipe";

@NgModule({
  declarations: [
    TableComponent,
    GlobalSearch,
    CsvExport,
    Header,
    Pagination,
    SearchPipe,
    PaginationPipe,
    GlobalSearchPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  exports: [TableComponent],
  providers: [],
  bootstrap: [TableComponent]
})
export class TableModule { }
