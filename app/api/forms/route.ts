import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
    const formData = await req.formData()
    console.log(formData);

    try {
        const response = await submitForm(formData);
        console.log('HERE ' + response);
    }
    catch (e) {
        return NextResponse.json({ message: 'Internal server error' })
    }


};

const submitForm = async (formData: any) => {
    try {
        const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLSeKlXVv3nbBx5MrkP3ylE4XPbacSao6hGNNcZ9vBEluelqKEA/viewform?usp=sf_link', {
            method: 'POST',
            body: new URLSearchParams(formData),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        if (response.ok) {
            console.log('Form data submitted successfully');
            return response.ok
        } else {
            console.error('Form submission failed');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
};
