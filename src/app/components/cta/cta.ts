import { Component } from '@angular/core';

@Component({
  selector: 'app-cta',
  standalone: true,
  templateUrl: './cta.html',
  styleUrl: './cta.scss'
})
export class CtaComponent {
  submitted = false;
  isSubmitting = false;
  submitError = false;

  async submitForm(event: SubmitEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '');
    const phone = String(data.get('phone') ?? '');
    const projectType = String(data.get('projectType') ?? '');
    this.isSubmitting = true;
    this.submitError = false;

    try {
      const response = await fetch('https://formsubmit.co/ajax/abhisheknishad167@yahoo.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name,
          phone,
          projectType,
          _subject: `New consultation request from ${name}`,
          _captcha: 'true'
        })
      });

      if (!response.ok) throw new Error('Consultation request failed');
      this.submitted = true;
      form.reset();
    } catch {
      this.submitError = true;
    } finally {
      this.isSubmitting = false;
    }
  }
}
