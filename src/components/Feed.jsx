import { FaRegImage } from "react-icons/fa6";

const Feed = () => {
  return (
    <div>
      <div className="p-4 font-bold border-b border-zinc-400">
        <h2>Anasayfa</h2>
      </div>

      <div className="py-5 px-7 border-b border-zinc-400">
        <input className="w-full border-none outline-none bg-transparent text-lg" placeholder="Neler Oluyor?" type="text" />
        <div className="flex justify-between items-center px-4 py-2">
          <div className="p-4 rounded-full transition duration-300 hover:bg-[#1F2937] cursor-pointer">
            <input id="fileInp" className="hidden" type="file" />
            <label htmlFor="fileInp">
              <FaRegImage className="text-lg cursor-pointer" />
            </label>
          </div>
          <button className="bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700">Tweetle</button>
        </div>
      </div>

    </div>
  )
}

export default Feed