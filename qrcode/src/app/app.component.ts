import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qrcode';


  public paymentUrl: string = '';

  // ngOnInit(): void {
  //   // Generate a dynamic payment URL each time the component is loaded
  //   const uniqueTransactionId = this.generateUniqueTransactionId();
  //   this.paymentUrl = `https://your-payment-gateway.com/pay?amount=100&currency=USD&transactionId=${uniqueTransactionId}`;
  // }

  // // Method to generate a unique transaction ID
  // generateUniqueTransactionId(): string {
  //   return Math.random().toString(36).substr(2, 9);
  // }





  // ngOnInit(): void {
  //   // Generate a dynamic payment URL each time the component is loaded
  //   const uniqueTransactionId = this.generateUniqueTransactionId();

  //   // const uniqueTransactionId = this.generateUniqueTransactionId();
  //   // const amount = 100; // dynamic amount
  //   // const currency = 'INR'; // dynamic currency
  //   // const vpa = 'your-merchant-vpa@axisbank'; // dynamic VPA
  //   // const payeeName = 'Your Merchant Name'; // dynamic payee name
  //   // const merchantCategory = 'your-merchant-category'; // dynamic merchant category
  
  //   // this.paymentUrl = this.getPaymentUrl(uniqueTransactionId, amount, currency, vpa, payeeName, merchantCategory);


  //   //needed
  //   this.paymentUrl = this.getPaymentUrl(uniqueTransactionId);
  // }

  // Method to generate a unique transaction ID
  generateUniqueTransactionId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  // Method to get the payment URL based on the transaction ID
  // getPaymentUrl(transactionId: string): string {
  //   const amount = 100;
  //   const currency = 'INR'; // Assuming Indian Rupee

  //   // For Google Pay
  //   const googlePayUrl = `upi://pay?pa=your-merchant-vpa@axisbank&pn=Your%20Merchant%20Name&mc=your-merchant-category&tid=${transactionId}&am=${amount}&cu=${currency}&tn=Payment%20for%20your%20order`;

  //   // For PhonePe
  //   const phonePeUrl = `upi://pay?pa=your-merchant-vpa@axisbank&pn=Your%20Merchant%20Name&mc=your-merchant-category&tid=${transactionId}&am=${amount}&cu=${currency}&tn=Payment%20for%20your%20order`;

  //   // You can add more payment options here

  //   // Return the payment URL based on the user's preferred payment method
  //   // For this example, let's assume we're using Google Pay
  //   return googlePayUrl;
  // }

  getPaymentUrl(transactionId: string): string {
    const amount = 100;
    const currency = 'INR'; // Assuming Indian Rupee
    const vpa = 'dhineshkvp897@oksbi'; // Replace with your actual VPA
    const payeeName = 'Dhinesh'; // Replace with your actual merchant name
    const merchantCategory = 'Product'; // Replace with your actual merchant category
  
    const paymentUrl = `upi://pay?pa=${vpa}&pn=${payeeName}&mc=${merchantCategory}&tid=${transactionId}&am=${amount}&cu=${currency}&tn=Payment%20for%20your%20order`;
  
    return paymentUrl;
  }

  // getPaymentUrl(transactionId: string, amount: number, currency: string, vpa: string, payeeName: string, merchantCategory: string): string {
  //   const paymentUrl = `upi://pay?pa=${vpa}&pn=${payeeName}&mc=${merchantCategory}&tid=${transactionId}&am=${amount}&cu=${currency}&tn=Payment%20for%20your%20order`;
  
  //   return paymentUrl;
  // }







  /// table data
  displayedColumns: string[] = ['id', 'name', 'age'];
  dataSource: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data: any) => {
      this.dataSource = data;
    });
  }
}
