import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qrcode';


  public paymentUrl: string = '';

  ngOnInit(): void {
    // Generate a dynamic payment URL each time the component is loaded
    const uniqueTransactionId = this.generateUniqueTransactionId();
    this.paymentUrl = `https://your-payment-gateway.com/pay?amount=100&currency=USD&transactionId=${uniqueTransactionId}`;
  }

  // Method to generate a unique transaction ID
  generateUniqueTransactionId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
