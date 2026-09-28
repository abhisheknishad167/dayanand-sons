import { Component } from '@angular/core';

@Component({
  selector: 'app-cta',
  standalone: true,
  templateUrl: './cta.html',
  styleUrl: './cta.scss'
})
export class CtaComponent {
  submitted = false;

  submitForm(event: SubmitEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '');
    const phone = String(data.get('phone') ?? '');
    const projectType = String(data.get('projectType') ?? '');
    const message = String(data.get('message') ?? '');
    const subject = encodeURIComponent(`New consultation request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nProject type: ${projectType}\n\nProject details:\n${message}`
    );

    window.location.href = `mailto:abhisheknishad167@yahoo.com?subject=${subject}&body=${body}`;
    this.submitted = true;
  }
}
