// create server
// listen port
import * as Onrequest from '../app';
import * as http from 'http';
let port:number;

let server = http.createServer()