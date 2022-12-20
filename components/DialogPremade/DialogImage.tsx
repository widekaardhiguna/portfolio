import { Dialog } from "components"
import Image, { ImageProps } from "next/future/image"

export type DialogImageProps = Dialog.DialogProps & {
  trigger?: React.ReactNode
  ImageProps: ImageProps
}

export const DialogImage = ({
  trigger,
  ImageProps,
  ...props
}: DialogImageProps) => {
  return (
    <Dialog.Root {...props}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content
          css={{
            maxWidth: "1200px",
          }}
        >
          {/* eslint-disable */}
          <Image
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 6,
              display: "block",
            }}
            {...ImageProps}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
