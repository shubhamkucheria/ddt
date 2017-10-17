import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
  constructor(public http: Http) {
  }

  public getData(url: string): Observable<any> {
    return this.http.get(url)
      .map((responseData) => {
        return responseData.json();
      });
  }
}
