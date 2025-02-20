interface Props  {
    image?: string,
    title?: string,
    description?: string,
    date?: string
}

function ObjectItem({date="00/00/0000", image = "/default-image.jpg", title="Title", description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quia cumque dolorem vitae tenetur..."}:Props) {
  return (
    <div className="cursor-pointer  w-[408px] h-auto bg-[#DAF1DE] shadow-xl drop-shadow-md rounded-2xl overflow-hidden hover:scale-110 duration-300">
      <div className="overflow-hidden border-b-4 border-[#235347]">
        <img 
          className="w-full h-[186px] object-cover object-center" 
          src={image} 
          alt="Imagem de exemplo" 
        />
      </div>

      <div className="p-4 text-[#235347]">
        <div className="flex justify-between items-center ">
          <h1 className="text-lg font-semibold ">{title}</h1>
          <p className="text-sm ">{date}</p>
        </div>
        <p className="mt-2 text-base ">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ObjectItem;