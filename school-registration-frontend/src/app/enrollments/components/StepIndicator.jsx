export default function StepIndicator({ currentStep }) {
    const steps = [1, 2, 3, 4, 5, 6];

    return (
        <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
                {steps.map((step, index) => (
                    <div key={step} className="flex items-center">
                        <div
                            className={`step-indicator w-10 h-10 rounded-full flex items-center justify-center font-bold
                ${step === currentStep
                                    ? "step-active"
                                    : step < currentStep
                                        ? "step-completed"
                                        : "bg-gray-300 text-gray-600"
                                }`}
                        >
                            {step}
                        </div>
                        {index < steps.length - 1 && (
                            <div className="w-16 h-1 bg-gray-300"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
