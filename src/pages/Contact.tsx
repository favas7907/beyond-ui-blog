import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ContactForm } from "../types";

const INITIAL_FORM: ContactForm = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const updateField =
    (field: keyof ContactForm) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setSubmitted(false);
      setForm((current) => ({
        ...current,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  return (
    <div className="space-y-14 pb-20">
      <section className="max-w-3xl space-y-4">
        <p className="section-kicker">Contact</p>
        <h1 className="section-title">Get in touch.</h1>
        <p className="section-body">
          Have a story idea, a collaboration request, or a question about the project?
          Send a message and we will get back to you.
        </p>
      </section>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-outer-bg text-text-primary">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold">Email</h3>
                <a
                  href="mailto:editorial@beyondui.com"
                  className="text-text-secondary hover:text-text-primary"
                >
                  editorial@beyondui.com
                </a>
                <p className="text-text-secondary">support@beyondui.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-outer-bg text-text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold">Visit</h3>
                <p className="text-text-secondary">123 Design District</p>
                <p className="text-text-secondary">San Francisco, CA 94103</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-outer-bg text-text-primary">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold">Call</h3>
                <a href="tel:+15551234567" className="text-text-secondary hover:text-text-primary">
                  +1 (555) 123-4567
                </a>
                <p className="text-text-secondary">Mon–Fri, 9am–6pm PST</p>
              </div>
            </div>
          </div>

          <div className="premium-card bg-accent-base p-8 text-white">
            <h3 className="text-2xl font-black tracking-tight text-white">Join the community</h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/75">
              Follow the project for new stories, editorial experiments, and updates.
            </p>
            <Link to="/blog" className="pill-button mt-6 bg-white text-text-primary hover:bg-white/90">
              Read the latest stories
            </Link>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="premium-card space-y-6 p-8 md:p-10"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-bold uppercase tracking-[0.22em] text-text-secondary">
              Full name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={updateField("name")}
              placeholder="John Doe"
              autoComplete="name"
              className="soft-input"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-bold uppercase tracking-[0.22em] text-text-secondary">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={updateField("email")}
              placeholder="john@example.com"
              autoComplete="email"
              className="soft-input"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-bold uppercase tracking-[0.22em] text-text-secondary">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={form.message}
              onChange={updateField("message")}
              placeholder="How can we help you?"
              className="soft-input resize-none"
              required
            />
          </div>

          {submitted && (
            <p className="text-sm text-text-secondary" aria-live="polite">
              Thanks for reaching out. Your message is ready to be handled by the editorial team.
            </p>
          )}

          <button
            type="submit"
            className="pill-button btn-dark w-full py-4"
          >
            <span className="inline-flex items-center gap-2">
              Send Message
              <Send size={16} />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
