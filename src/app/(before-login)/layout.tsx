export default async function Layout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-row bg-main-bg bg-cover w-dvw h-dvh">{children}</div>;
}
