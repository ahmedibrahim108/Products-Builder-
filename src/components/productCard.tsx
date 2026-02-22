import type { IProduct } from "../interfaces";
import { textSlicer } from "../utility/txtSlicer";
import Image from "./image";
import Button from "./UI/Button";

interface IProps {
  product: IProduct;
}
function ProductCard({ product }: IProps) {
  // const { id, category, title, description, imageURL, price } = product;
  return (
    <div className="border  p-2 rounded-md flex flex-col">
      <Image
        src={product.imageURL}
        alt="product image"
        className="rounded-md my-2"
      />
      <h3>{product.title}</h3>
      <p>{textSlicer(product.description)}</p>

      <div className="flex space-x-2 items-center my-2">
        <span className="inline-block w-5 h-5 bg-indigo-700 rounded-full" />
        <span className="inline-block w-5 h-5 bg-yellow-700 rounded-full" />
        <span className="inline-block w-5 h-5 bg-red-700 rounded-full" />
      </div>

      <div className="flex justify-between items-center my-3">
        <span>{product.price}</span>

        <Image
          src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>

      <div className="flex items-center space-x-2 ">
        <Button
          className="bg-indigo-800  "
          onClick={() => {
            console.log("clicked");
          }}
        >
          Edit
        </Button>
        <Button className="bg-red-800 ">Delete</Button>
        <Button className="bg-green-800 ">Sucsess</Button>
        <Button className="bg-gray-300 ">Cancel</Button>
      </div>
    </div>
  );
}

export default ProductCard;
