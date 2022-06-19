import {ReplaySubject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  sample: ReplaySubject<string> = new ReplaySubject<string>(1);


  // -------
// ->  ->  ->
//   -------


}
