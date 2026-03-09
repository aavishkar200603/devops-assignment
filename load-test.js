import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 10,          // 10 virtual users
  duration: '10s',  // run test for 10 seconds
};

export default function () {
  http.get('http://localhost:3000/add?a=5&b=3');
  sleep(1);
}