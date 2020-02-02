import {HttpClient, HttpHeaders, HttpXhrBackend} from "@angular/common/http";
import {InjectorInstance} from "../app.module";
import {ModuleManagement} from "./module-management";

export class Api {

  public static getApi(url: string) {
    const http = new HttpClient(new HttpXhrBackend({build: () => new XMLHttpRequest()}));
    let promise = new Promise(((resolve) => {
      http.get(url).subscribe
      ((data: any) => {
        resolve(data);
      });
    }));

    return promise;
  }


  public static postApi(url: string, body: any) {
    const httpClient = new HttpClient(new HttpXhrBackend({build: () => new XMLHttpRequest()}));
    let header: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    let promise = new Promise(((resolve, reject) => {
      httpClient.post(url, body, {headers: header}).subscribe(
        (result: any) => {
          resolve(result);
        });
    }));

    return promise;
  }

  public static postApiFormData(url: string, form: FormData) {
    const httpClient = new HttpClient(new HttpXhrBackend({build: () => new XMLHttpRequest()}));
    let promise = new Promise(((resolve, reject) => {
      httpClient.post(url, form).subscribe(
        (result: any) => {
          resolve(result);
        });
    }));

    return promise;
  }

  //returns url of the file
  public static sendFileToCloudStorage(file: File): Promise<any> {
    let form = new FormData();
    form.append('file', file);
    let promise = new Promise((resolve => {
      this.postApiFormData(ModuleManagement.cloudStorageIP + '/upload/', form).then(
        (data: any) => {
          resolve(data.url)
        }
      );
    }));

    return promise;
  }

  //returns file
  public static getFileFromCloudStorage(url: string): Promise<any> {
    const http = new HttpClient(new HttpXhrBackend({build: () => new XMLHttpRequest()}));
    let promise = new Promise(((resolve) => {
      http.get(url, {responseType: 'blob'}).subscribe
      ((data: any) => {
        let file: File = this.BlobToFile(data, '');
        resolve(file);
      });
    }));

    return promise;
  }

  public static BlobToFile(theBlob: Blob, fileName: string): File {
    let b: any = theBlob;
    b.lastModifiedDate = new Date();
    b.name = fileName;
    return b as File;
  }
}
