declare module 'react-raptorize' {
  import type { ComponentType } from 'react'

  export interface RaptorizeProps {
    code?: boolean
    disabled?: boolean
    repeat?: boolean
    sound?: boolean
    soundDelay?: number
    imagePath?: string
    audioPath?: string | string[]
  }

  const Raptorize: ComponentType<RaptorizeProps>
  export default Raptorize
}

