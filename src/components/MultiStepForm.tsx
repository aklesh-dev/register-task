import useMultiStepForm from "./useMultiStepForm";

function MultiStepForm() {
    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next, } = useMultiStepForm([
        <div>ONe</div>,
        <div>Two</div>,
        <div>Three</div>,
        <div>Four</div>,
    ]);

    return (
        <section className='max-w-4xl border-2 border-red-400 mx-auto max-h-svh p-3'>
            <div className="">
                <form>
                    <div className="">
                        {currentStepIndex + 1}/{steps.length}
                    </div>

                    {step}

                    <div className="flex gap-4 flex-row-reverse">
                        <button type="button" onClick={next} className="border-2 p-2">{isLastStep ? "Finish" : "Next"}</button>

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