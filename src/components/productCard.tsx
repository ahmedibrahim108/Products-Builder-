import Image from "./image";
function ProductCard() {
  return (
    <div className="border  p-2 rounded-md flex flex-col">
      <Image
        src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="product image"
        className="rounded-md my-2"
      />
      <h3>2026 Genesis GV70:Npmine</h3>
      <p>
        As luxury brands go South Kore's Genesis is still in infancy having sold
        its first cars (as an independint Hynuda)
      </p>

      <div className="flex space-x-2 items-center my-2">
        <span className="inline-block w-5 h-5 bg-indigo-700 rounded-full" />
        <span className="inline-block w-5 h-5 bg-yellow-700 rounded-full" />
        <span className="inline-block w-5 h-5 bg-red-700 rounded-full" />
      </div>

      <div className="flex justify-between items-center my-3">
        <span>$500.000</span>

        <Image
          src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>

      <div className="flex items-center space-x-2 ">
        <button className="bg-indigo-800 text-white rounded-md w-full p-1.5">
          Edit
        </button>
        <button className="bg-red-800 text-white rounded-md w-full p-1.5">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
