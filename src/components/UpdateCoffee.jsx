import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const test = form.test.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const updatedCoffee = {name,quantity,supplier,test,category,details,photo}
        console.log(updatedCoffee);

        fetch(`http://localhost:3389/coffee/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })

        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee update Successfully Done',
                    icon: 'Success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }

    const coffee = useLoaderData();
    const {_id, name, quantity, supplier, test, category, details, photo} = coffee;


    return (
        <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-4xl">Add coffee</h2>

      <form onSubmit={handleUpdateCoffee} className="mt-12">
{/* One */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Enter your coffee name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="Quantity number"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
{/* two */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Test</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="test"
                defaultValue={test}
                placeholder="Enter your Test"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

{/* Category */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Enter your Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Enter your details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>



        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Enter your photo url"
                className="input input-bordered w-full"
              />
            </label>
          </div>

     
        </div>

  <input type="submit" value="Update Coffee" className="btn btn-block" />
      </form>
    </div>
    );
};

export default UpdateCoffee;