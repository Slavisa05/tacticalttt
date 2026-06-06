"use client"

import { useState } from "react"
import Button from "../ui/Button"

type ContactPageDict = {
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
}

type ContactFormProps = {
    contactPage: ContactPageDict;
}

export default function ContactForm({ contactPage }: ContactFormProps) {
    const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('loading');

        const form = e.currentTarget;
        const data = {
            ime: (form.elements.namedItem('name') as HTMLInputElement).value,
            telefon: (form.elements.namedItem('phoneNumber') as HTMLInputElement).value,
            poruka: (form.elements.namedItem('message') as HTMLInputElement).value,
        };

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        setStatus(res.ok ? 'ok' : 'error');
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {[
                { label: contactPage.nameLabel, name: "name", type: "text", placeholder: contactPage.namePlaceholder, tag: "input", autocomplete: "name" },
                { label: contactPage.phoneLabel, name: "phoneNumber", type: "tel", placeholder: contactPage.phonePlaceholder, tag: "input", autocomplete: "tel" },
                { label: contactPage.messageLabel, name: "message", type: "text", placeholder: contactPage.messagePlaceholder, tag: "textarea", autocomplete: "off" },
            ].map((field) => (
                <div
                    key={field.name}
                    className="flex flex-col gap-1.5"
                >
                    <label htmlFor={field.name}>{field.label}</label>
                    {field.tag === "textarea" ? (
                        <textarea
                            id={field.name}
                            className="h-40 px-3 py-2 rounded-xl border border-green-color outline-none bg-background/70 text-foreground resize-none backdrop-blur-sm"
                            name={field.name}
                            placeholder={field.placeholder}
                            autoComplete={field.autocomplete}
                        />
                    ) : (
                        <input
                            id={field.name}
                            className="px-3 py-2 rounded-xl border border-green-color outline-none bg-background/70 text-foreground backdrop-blur-sm"
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            autoComplete={field.autocomplete}
                        />
                    )}
                </div>
            ))}

            <div>
                <Button type="submit" text="Pošalji poruku" />
            </div>

            {status === 'ok' && <p className="text-green-500 text-sm">Poruka poslata!</p>}
            {status === 'error' && <p className="text-red-500 text-sm">Greška, pokušaj ponovo.</p>}
        </form>
    )
}