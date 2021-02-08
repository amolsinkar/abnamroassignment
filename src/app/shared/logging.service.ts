import { Injectable } from '@angular/core';
import * as StackTrace from 'stacktrace-js';

@Injectable()
export class LoggingService {
  constructor() {}

  log({ message, url, stack: any }) {
    console.log(new Date() + ': ' + JSON.stringify(message));
  }
}
