export default function Button({ title }) {
  return (
    <div className="w-full flex flex-col items-center space-y-5 py-10">
      <button className="block p-3 bg-gray-800 bg-opacity-80 text-white font-mono w-[80%] rounded-md cursor-pointer uppercase border-none outline-none hover:bg-black transition-all duration-[400ms] transform hover:scale-105 hover:bg-opacity-100 active:translate-y-[4px]">
        {title}
      </button>
    </div>
  )
}
