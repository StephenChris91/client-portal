export interface Step1Props {
    onNext: (data: {
        fullName: string
        email: string
        password: string
        confirmPassword: string
    }) => void
}

export interface Step2Props {
    email: string
    onNext: (data: { otp: string }) => void
}

export interface Step3Props {
    onNext: (data: { workspace: string }) => void
}

export interface Step4Props {
    onNext: () => void
}
