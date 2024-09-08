import React, { useState } from "react";
import Address from "./Address";
import PersonalDetails from "./PersonalDetails";
import useMultiStepForm from "./useMultiStepForm";

type FormData = {
    firstName: string;
    middleName: string;
    lastName: string;
    phone: string;
    birthDate: string;
    gender: string;
    country: string;
    district: string;
    muncipiality: string;
    city: string;
    ward: string;
    profilePicture: string;
}

const INITIAL_DATA: FormData = {
    firstName: '',
    middleName: '',
    lastName: '',
    phone: '',
    birthDate: "",
    gender: "",
    country: "",
    district: "",
    muncipiality: "",
    city: "",
    ward: "",
    profilePicture: '',
};

function MultiStepForm() {
    const [formData, setFormData] = useState(INITIAL_DATA);

    const updateFields = (fields: Partial<FormData>) => {
        setFormData((prevFormData) => ({ ...prevFormData, ...fields }));
    };


    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next, } = useMultiStepForm([
        <PersonalDetails {...formData} updateFields={updateFields} />,
        <Address  {...formData} updateFields={updateFields} />,
    ]);



    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!isLastStep) return next();
        // log the data
        console.log(formData);

    };

    return (
        <section className='max-w-4xl border-2 border-red-400 mx-auto max-h-svh p-3'>
            <div className="">
                <form onSubmit={onSubmit}>
                    <div className="">
                        {currentStepIndex + 1}/{steps.length}
                    </div>

                    {step}

                    <div className="flex gap-4 flex-row-reverse">
                        <button type="submit" className="border-2 p-2">{isLastStep ? "Finish" : "Next"}</button>

                        {!isFirstStep && (
                            <button type="button" onClick={back} className="border-2 p-2">Back</button>
                        )}
                    </div>

                </form>
            </div>
        </section>
    )
}

export default MultiStepForm;