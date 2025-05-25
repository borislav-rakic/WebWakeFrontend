import { Component, inject } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ConfigService } from '../services/config-service';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import WakeResponse from '../entities/wakeResponse';

@Component({
  selector: 'app-webwake',
  imports: [NzFormModule, NzButtonModule, NzInputModule, ReactiveFormsModule],
  templateUrl: './webwake.component.html',
  styleUrl: './webwake.component.css',
})
export class WebwakeComponent {
  macAddressFormGroup = new FormGroup({});

  private configService = inject(ConfigService);
  postFormControl = new FormControl<string>("");
  
  statusMessage: string = "";
  isLoading: boolean = false;
  status: string = "";
  isInvalidMac: boolean = false;

  private macAddressRegex = /^([0-9A-Fa-f]{2}[:-]?){5}([0-9A-Fa-f]{2})$/;

  // This method is called on input change to update validation status
  onInputChanged(event: KeyboardEvent): void {
    const mac = this.postFormControl.value?.trim() || '';

    // Don't mark as invalid if empty
    if (mac === '') {
      this.isInvalidMac = false;
      this.statusMessage = '';
    } else if (!this.macAddressRegex.test(mac)) {
      this.isInvalidMac = true;
      this.statusMessage = 'Invalid MAC address format.';
      this.status = "error";
    } else {
      this.isInvalidMac = false;

      // Reset error status if it was due to invalid format
      this.status = "";
      this.statusMessage = "";
    }

    // Sends the MAC address when pressing enter
    if (event.key === "Enter") {
      this.onSendButtonPressed();
    }
  }

  // Sends the MAC address
  onSendButtonPressed() {
    const macAddress = this.postFormControl.value?.trim();

    if (!macAddress || !this.macAddressRegex.test(macAddress)) {
      this.statusMessage = "Please enter a valid MAC address!";
      this.status = "error";
      return;
    }

    this.isLoading = true;
    this.status = "";
    this.statusMessage = "Sending MAC address...";

    this.configService.post("/wake", { mac: macAddress }).subscribe({
      next: (response: WakeResponse) => {
        console.log("MAC address sent successfully:", response);
        this.statusMessage = `MAC address sent successfully!`;
        this.isLoading = false;
        this.status = "success";
      },
      error: (err: Error) => {
        console.error("Failed to send MAC address:", err);
        this.statusMessage = `Failed to send MAC address: ${err.message}`;
        this.isLoading = false;
        this.status = "error";
      }
    });
  }
}
