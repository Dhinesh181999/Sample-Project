import { Component } from '@angular/core';
interface Seat {
  label: string;
  status: 'available' | 'selected' | 'occupied' | 'unavailable';
  selected?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'data';
  selectedDate: Date | null = null;
  seatRows: Seat[][] = [
    [
      { label: 'A1', status: 'occupied' },
      { label: 'A2', status: 'available' },
      { label: 'A3', status: 'available' },
      { label: 'A4', status: 'unavailable' },
    ],
    [
      { label: 'B1', status: 'available' },
      { label: 'B2', status: 'available' },
      { label: 'B3', status: 'occupied' },
      { label: 'B4', status: 'available' },
    ],
    // Add more rows as needed
  ];

  getSeatClass(seat: Seat): string {
    return seat.selected ? 'selected' : seat.status;
  }

  
  selectSeat(seat: Seat): void {
    if (seat.status === 'available') {
      seat.selected = !seat.selected;
    }
  }




}
