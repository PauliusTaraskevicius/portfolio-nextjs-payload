export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-screen-[2050px] mx-auto flex flex-col min-h-screen px-2 lg:px-0">{children}</div>
}
