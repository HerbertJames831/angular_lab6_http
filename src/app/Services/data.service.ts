import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //Way we can do asynchronous programming



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

GetStudentData():Observable<any> {

  return this.http.get('https://jsonblob.com/api/jsonblob/948523855690088448')



}

GetWeatherData():Observable<any> {

return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303')

}


}
