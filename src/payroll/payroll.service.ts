import { Injectable } from '@nestjs/common';

@Injectable()
export class PayrollService {
    calculatePayroll() {
        return {
            totalEmployees: 10,
            totalSalary: 50000,
        };
    }
}
