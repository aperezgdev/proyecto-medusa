interface CajaGrisProps {
  title?: string
  className?: string
  children: JSX.Element
}

export const CajaGris = ({ children, className, title }: CajaGrisProps) => {
  return (
    <div className={`shadow-md bg-[#FAFAFA] p-4 ${className ?? ''}`}>
      <span className="text-3xl pb-3 font-bold">{title}</span>
      {children}
    </div>
  )
}
