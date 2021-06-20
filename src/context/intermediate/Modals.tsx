import { Screen } from "./Intermediate";

import { ErrorModal } from "./modals/Error";
import { InputModal } from "./modals/Input";
import { PromptModal } from "./modals/Prompt";
import { SignedOutModal } from "./modals/SignedOut";
import { ClipboardModal } from "./modals/Clipboard";
import { OnboardingModal } from "./modals/Onboarding";
import { ModifyAccountModal } from "./modals/ModifyAccount";

export interface Props {
    screen: Screen;
    openScreen: (id: any) => void;
}

export default function Modals({ screen, openScreen }: Props) {
    const onClose = () => openScreen({ id: "none" });

    switch (screen.id) {
        case "_prompt":
            return <PromptModal onClose={onClose} {...screen} />;
        case "_input":
            return <InputModal onClose={onClose} {...screen} />;
        case "error":
            return <ErrorModal onClose={onClose} {...screen} />;
        case "signed_out":
            return <SignedOutModal onClose={onClose} {...screen} />;
        case "clipboard":
            return <ClipboardModal onClose={onClose} {...screen} />;
        case "modify_account":
            return <ModifyAccountModal onClose={onClose} {...screen} />;
        case "onboarding":
            return <OnboardingModal onClose={onClose} {...screen} />;
    }

    return null;
}