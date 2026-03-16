import type { FormContent } from '../../data/portalContent';

type FormSectionProps = {
  form: FormContent;
};

export function FormSection({ form }: FormSectionProps) {
  return (
    <section id={form.id} className="portal-section portal-section--form" data-section-id={form.id}>
      <div className="form-panel">
        <aside className="form-panel__note-shell" data-reveal>
          <p className="form-panel__note">
            {form.noteLead}
            <strong>{form.noteHighlight}</strong>
            {form.noteTail}
          </p>
        </aside>

        <form className="trial-form" onSubmit={(event) => event.preventDefault()} data-reveal>
          <div className="trial-form__grid">
            {form.fields.map((field) => (
              <label
                key={field.id}
                className={field.type === 'textarea' ? 'form-field form-field--full' : 'form-field'}
                htmlFor={field.id}
              >
                <span>{field.label}</span>
                {field.type === 'textarea' ? (
                  <textarea id={field.id} name={field.id} placeholder={field.placeholder} rows={5} />
                ) : (
                  <input id={field.id} name={field.id} type={field.type} placeholder={field.placeholder} />
                )}
              </label>
            ))}
          </div>

          <button className="button button--primary" type="submit">
            {form.submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
