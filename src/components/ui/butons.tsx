import type { ReactNode } from 'react'

interface PropsButton {
  className: string
  children?: ReactNode
}
const Button = ({ className, children }: PropsButton) => {
  return (
    <button
      className={` ${className} bg-[#FFE071] text-[#3D3D3D] xl:w-[160px] xl:h-[50px] lg:w-[160px] lg:h-[50px] md:w-[160px] md:h-[50px] w-[140px] h-[40px] rounded-[10px] font-medium flex justify-center items-center gap-[7px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#FFD84A]`}
    >
      {children}
    </button>
  )
}
export default Button
