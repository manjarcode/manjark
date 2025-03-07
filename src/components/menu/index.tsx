import { Menu as ArkMenu } from "@ark-ui/react/menu"
import { ChevronDown } from "lucide-react"
import { ReactNode, HTMLProps } from "react"

export const Menu = ({ children }: { children: ReactNode }) => (
  <ArkMenu.Root>
    <div className="relative">
      <ArkMenu.Trigger className="w-10 h-10 bg-gray-200 text-black rounded-sm hover:bg-gray-300 flex items-center justify-center p-0 m-0 focus-visible:outline-gray-400">
        <ChevronDown size={16} />
      </ArkMenu.Trigger>
      <ArkMenu.Content className="absolute right-0 top-full bg-gray-100 shadow-md rounded-sm border border-gray-300 w-40 p-0 focus-visible:outline-gray-400">
        {children}
      </ArkMenu.Content>
    </div>
  </ArkMenu.Root>
)

Menu.Item = ({ children, value, ...props }: MenuItemProps) => (
  <ArkMenu.Item className="p-2 hover:bg-gray-200 cursor-pointer" value={value} {...props}>
    {children}
  </ArkMenu.Item>
)

type MenuItemProps = {
  children: ReactNode
  value: string
} & HTMLProps<HTMLDivElement>

Menu.ItemLink = ({ children, href, value, ...props}: MenuItemLinkProps) => (
  <ArkMenu.Item value={value} className="p-0" {...props}>
    <a
      href={href}
      className="block p-2 hover:bg-gray-200 cursor-pointer text-black no-underline focus-visible:outline-gray-400"
    >
      {children}
    </a>
  </ArkMenu.Item>
)

type MenuItemLinkProps = {
  children: ReactNode
  href: string
  value: string
} & HTMLProps<HTMLDivElement>
