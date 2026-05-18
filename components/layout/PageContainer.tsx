type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Mobile: full width with px-6 (matches home hero).
 * md+: inner column at 80% / max 80vw (original desktop layout).
 */
export function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div className={`w-full px-6 py-16 md:py-24 ${className}`.trim()}>
      <div className="mx-auto w-full md:w-[80%] md:max-w-[80vw]">{children}</div>
    </div>
  );
}
