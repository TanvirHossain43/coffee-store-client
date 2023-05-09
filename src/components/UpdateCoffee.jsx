import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(updatedCoffee)
        //    send data to server
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedCoffee)
        })
            .then(res =>res.json())
            .then(data =>{
               if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success',
                    text: 'coffee updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
               }
            })

    }


    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold mb-6">Update Coffee: {name}</h2>
            <form onSubmit={handleUpdateCoffee} >
                {/* name and quantity row */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="name" defaultValue={name} placeholder="coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <span>Quantity</span>
                            <input type="text" name="quantity" defaultValue={quantity}  placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* supplier and test row */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <span>Supplier</span>
                            <input type="text" name="supplier" defaultValue={supplier}  placeholder="supplier name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <span>Taste</span>
                            <input type="text" name="taste" defaultValue={taste}  placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* catagory and details */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <span>Category</span>
                            <input type="text" name="category" defaultValue={category}  placeholder="coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <span>Details</span>
                            <input type="text" name="details" placeholder="Details" defaultValue={details}  className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Photo URL row */}
                <div >
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <span>Photo URL</span>
                            <input type="text" name="photo" placeholder="coffee name" defaultValue={photo}  className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="mt-3">
                    <input type="submit" value="Add coffee" className="btn btn-block" />
                </div>
            </form>

        </div>
    );
};

export default UpdateCoffee;