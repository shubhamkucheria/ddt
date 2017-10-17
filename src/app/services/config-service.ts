import { Injectable } from "@angular/core";

@Injectable()
export class ConfigService {
  public searchEnabled = true;
  public orderEnabled = true;
  public globalSearchEnabled = true;
  public footerEnabled = false;
  public paginationEnabled = true;
  public exportEnabled = true;
  public editEnabled = false;
  public clickEvent = false;
  public selectRow = true;
  public selectCol = false;
  public selectCell = false;
  public resourceUrl = "https://www.json-generator.com/api/json/get/ceVvFoDEeq";
  public rows = 10;
  public columns: string[] = [];
  public hiddenColumns = new Set([]);
}
