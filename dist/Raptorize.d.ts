interface RaptorizeProps {
    code?: boolean;
    disabled?: boolean;
    repeat?: boolean;
    sound?: boolean;
    soundDelay?: number;
    imagePath?: string;
    audioPath?: string[];
}
declare const Raptorize: (props: RaptorizeProps) => import("react/jsx-runtime").JSX.Element;
export default Raptorize;
