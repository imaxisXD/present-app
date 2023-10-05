import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Metadata } from "next";
import { useState } from "react";




export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function constructMetadata({
    title = "Dub - Link Management for Modern Marketing Teams",
    description = "Dub is an open-source link management tool for modern marketing teams to create, share, and track short links.",
    image = "https://dub.co/_static/thumbnail.png",
    icons = "/favicon.ico",
    noIndex = false,
}: {
    title?: string;
    description?: string;
    image?: string;
    icons?: string;
    noIndex?: boolean;
} = {}): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: image,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
            creator: "@dubdotco",
        },
        icons,
        themeColor: "#FFF",
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
}

export function useContactForm() {
    const [status, setStatus] = useState<string>();

    const handleFormSubmit: React.FormEventHandler = (e) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;

        const injectedData: Record<string, string | number> = {
            // Here you can specify anything you need to inject dynamically, outside the form. For example:
            // DYNAMIC_DATA_EXAMPLE: 123,
        };

        const inputs = Array.from(form.elements) as HTMLFormElement[];
        const data = inputs
            .filter((input) => input.name)
            .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {} as Record<string, string>);

        Object.assign(data, injectedData);

        fetch('https://public.herotofu.com/v1/16576110-639b-11ee-94f4-efb6cbd494ee', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                // It's likely a spam/bot submission, so bypass it to validate via captcha challenge old-school style
                if (response.status === 422) {
                    // Append dynamically generated keys back to the form
                    Object.keys(injectedData).forEach((key) => {
                        const el = document.createElement('input');
                        el.type = 'hidden';
                        el.name = key;
                        el.value = injectedData[key].toString();

                        form.appendChild(el);
                    });

                    // Let's submit the form again and spammer/bot will be redirected to another page automatically
                    // Submitting via javascript will bypass calling this function again
                    form.setAttribute('target', '_blank');
                    form.submit();

                    throw new Error('Please finish the captcha challenge');
                }

                if (response.status !== 200) {
                    throw new Error(response.statusText);
                }

                return response.json();
            })
            .then(() => setStatus("We'll be in touch soon."))
            .catch((err) => setStatus(err.toString()));
    };

    return { status, handleFormSubmit };
}


