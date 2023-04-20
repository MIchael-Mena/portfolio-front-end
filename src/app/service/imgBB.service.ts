import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ImgBBService {

  // private readonly apiKey: string = '';

  constructor(private readonly http: HttpClient) {
  }

  upload(file: File, apiKey: string): Observable<string> {
    const formData = new FormData();
    formData.append('image', file);
    return this.http
      .post('/upload', formData, {params: {key: apiKey}})
      .pipe(map((response: any) => response['data']));
    // map transforma la respuesta del servidor para devolver solo la data
  }

}
