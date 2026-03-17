import { useState, type FormEvent } from 'react';
import type { FormContent } from '../../data/portalContent';

type FormSectionProps = {
  form: FormContent;
};

export function FormSection({ form }: FormSectionProps) {
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const payload = {
      businessOrName: String(formData.get('businessOrName') ?? ''),
      email: String(formData.get('email') ?? ''),
      phone: String(formData.get('phone') ?? ''),
      message: String(formData.get('message') ?? ''),
    };

    setSubmitState('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      formElement.reset();
      setSubmitState('success');
    } catch {
      setSubmitState('error');
    }
  }

  return (
    <section id={form.id} className="portal-section portal-section--form" data-section-id={form.id}>
      <div className="form-panel bottom-row">
        <aside className="form-panel__note-shell" data-reveal>
          <div className="form-panel__note-card">
            <p className="form-panel__note">
              {form.noteLead}
              <strong>{form.noteHighlight}</strong>
              {form.noteTail}
            </p>
          </div>
        </aside>

        <form className="trial-form bottom-row__form" onSubmit={handleSubmit} data-reveal>
          <div className="trial-form__grid">
            {form.fields.map((field) => (
              <label
                key={field.id}
                className={
                  field.type === 'textarea' || field.id === 'businessOrName'
                    ? 'form-field form-field--full'
                    : 'form-field'
                }
                htmlFor={field.id}
              >
                <span>{field.label}</span>
                {field.type === 'textarea' ? (
                  <textarea id={field.id} name={field.id} placeholder={field.placeholder} rows={5} />
                ) : (
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.id === 'businessOrName' || field.id === 'email' || field.id === 'phone'}
                  />
                )}
              </label>
            ))}
          </div>

          <div className="trial-form__actions">
            <button className="button button--primary" type="submit" disabled={submitState === 'sending'}>
              {submitState === 'sending' ? form.submitPendingLabel : form.submitLabel}
            </button>

            {submitState === 'success' ? (
              <p className="trial-form__status trial-form__status--success" role="status">
                {form.submitSuccessMessage}
              </p>
            ) : null}

            {submitState === 'error' ? (
              <p className="trial-form__status trial-form__status--error" role="alert">
                {form.submitErrorMessage}
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
