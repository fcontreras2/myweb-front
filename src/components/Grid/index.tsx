type Props = {
  children: JSX.Element | JSX.Element[];
  className?: string
};

const GridWrapper = ({ children, className }: Props) => {
  return (
    <div className={`container mx-auto ${className || ''}`}>
      <div className="grid grid-cols-16 gap-4">{children}</div>
    </div>
  );
};

export default GridWrapper;
