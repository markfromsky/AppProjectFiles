import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	mainhandle = 0;
	changehandle(){
		if(!this.mainhandle){
			this.mainhandle = 1;
		}
		else{
			this.mainhandle = 0;
		}
		console.log(this.mainhandle);

		if(this.mainhandle){
			this.startRepeat();
		}
		else{
			this.stopRepeat();
		}
	}
	repeat(){
		console.log('completed');
		this.startRepeat();
	}
repeatHandle = 0;
startRepeat() {
    if (!this.repeatHandle) {
        this.repeatHandle = setTimeout(this.repeatTick(),200000000);
    }
}
repeatTick() {
    this.repeatHandle = 0;
    this.repeat();
}
stopRepeat() {
    if (this.repeatHandle) {
        clearTimeout(this.repeatHandle);
        this.repeatHandle = 0;
    }
}
}



