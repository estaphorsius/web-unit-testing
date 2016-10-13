import * as toastr from 'toastr';

export class App {
  message = 'Hello World!';

  attached(){
    toastr.success('Loaded successfully!')
  }
}
