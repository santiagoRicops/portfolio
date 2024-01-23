interface PropsTagsIcons {
  className?: string
  children?: React.ReactNode
}

function TagsIcons({ className = '', children }: PropsTagsIcons) {
  return (
    <div
      className={`rounded-[100px] ${className} p-[5px] gap-[10px] mt-[10px] mb-[10px] mr-[10px] flex justify-center items-center cursor-pointer hover:bg-gray-300  hover:text-black transition-all duration-300`}
    >
      {children}
    </div>
  )
}

export default TagsIcons
