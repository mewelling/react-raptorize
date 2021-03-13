/// <reference types="react" />
export interface RaptorizeProps {
    soundDelay: number;
    sound: boolean;
    repeat: boolean;
    code: boolean;
    disabled: boolean;
}
/**
 * A custom Thing component. Neat!
 */
declare const Raptorize: (props: RaptorizeProps) => JSX.Element;
export default Raptorize;
