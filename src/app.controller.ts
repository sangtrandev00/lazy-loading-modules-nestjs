import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { LazyModuleLoader } from '@nestjs/core';
import { ShiftService } from './shift/shift.service';
import { PayrollService } from './payroll/payroll.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly lazyModuleLoader: LazyModuleLoader) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('load-shift-module')
  async loadShiftModule() {
    const { ShiftModule } = await import('./shift/shift.module');
    const moduleRef = await this.lazyModuleLoader.load(() => ShiftModule);
    const shiftService = moduleRef.get(ShiftService);
    console.log("all shift", shiftService.getAllShifts());
    return 'ShiftModule has been loaded!';
  }

  @Get('load-payroll-module')
  async loadPayrollModule() {
    const { PayrollModule } = await import('./payroll/payroll.module');
    const moduleRef = await this.lazyModuleLoader.load(() => PayrollModule);
    const payrollService = moduleRef.get(PayrollService);
    console.log("all payroll", payrollService.calculatePayroll());
    return 'PayrollModule has been loaded!';
  }
}
