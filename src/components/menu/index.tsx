import { Menu as ArkMenu } from "@ark-ui/react/menu"
import { ChevronDown } from "lucide-react"
import { ReactNode } from "react"

export const Menu = ({ children }: { children: ReactNode }) => (
  <ArkMenu.Root>
    <ArkMenu.Trigger className="w-10 h-10 bg-gray-200 text-black rounded-sm hover:bg-gray-300 flex items-center justify-center p-0 m-0 focus-visible:outline-gray-400">
      <ChevronDown size={16} />
    </ArkMenu.Trigger>
    <ArkMenu.Positioner className="absolute right-0 top-0 -m-2">
      <ArkMenu.Content className="bg-gray-100 shadow-md rounded-sm border border-gray-300 w-40 p-0 focus-visible:outline-gray-400">
        {children}
      </ArkMenu.Content>
    </ArkMenu.Positioner>
  </ArkMenu.Root>
)

Menu.Item = ({ children, value }: { children: ReactNode; value: string }) => (
  <ArkMenu.Item className="p-2 hover:bg-gray-200 cursor-pointer" value={value}>
    {children}
  </ArkMenu.Item>
)

Menu.ItemLink = ({
  children,
  href,
  value,
}: {
  children: ReactNode;
  href: string;
  value: string;
}) => (
  <ArkMenu.Item value={value} className="p-0">
    <a
      href={href}
      className="block p-2 hover:bg-gray-200 cursor-pointer text-black no-underline focus-visible:outline-gray-400"
    >
      {children}
    </a>
  </ArkMenu.Item>
)