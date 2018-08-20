import { Get, Controller } from '@nestjs/common';
import {hostname, uptime} from 'os';


@Controller()
export class AppController {
  constructor() {}

  @Get()
  index() {

    return {
        server_status: 'ok',
        server_uptime: process.uptime(),
        host_name: hostname(),
        host_uptime: uptime()
    };
  }
}
