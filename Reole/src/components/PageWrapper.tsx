const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="px-4 md:px-12 max-w-7xl mx-auto w-full">
    {children}
  </div>
);

export default PageWrapper;