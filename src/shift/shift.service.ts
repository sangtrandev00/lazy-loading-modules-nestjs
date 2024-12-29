import { Injectable } from '@nestjs/common';

@Injectable()
export class ShiftService {
    getAllShifts() {
        return [
            { id: 1, name: 'Morning Shift', time: '08:00 - 12:00' },
            { id: 2, name: 'Evening Shift', time: '14:00 - 18:00' },
        ];
    }
}
