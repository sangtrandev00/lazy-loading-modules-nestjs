import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShiftModule } from './shift/shift.module';
import { PayrollModule } from './payroll/payroll.module';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule { }
