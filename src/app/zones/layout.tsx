export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white min-h-screen max-w-[400px] w-[calc(100vw-18px)] mx-auto pb-24">
      {children}
    </section>
  );
}
