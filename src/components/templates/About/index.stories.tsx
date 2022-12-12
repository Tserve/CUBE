import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { HomeTemplate } from "."

type HomeTemplateType = typeof HomeTemplate

const meta: Meta<ComponentProps<HomeTemplateType>> = {
  component: HomeTemplate,
}
export default meta

export const Default: ComponentStoryObj<HomeTemplateType> = {}
