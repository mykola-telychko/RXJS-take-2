import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

// Example 2: Take the first 5 values from source
//emit value every 1s
const srcInterval$ = interval(1000);
//take the first 5 emitted values
const example = srcInterval$.pipe(take(5));
//output: 0,1,2,3,4
const subscribe = example.subscribe((val) => console.log(val));
