import React, { useState, useEffect } from "react";
import { Sugar } from "react-preloaders";
import * as links from "./../../../connect/data.json";
import { post } from "./../../../connect/index";

const NewProduct = ({ status }) => {
  const url = `${links.url}/newproduct`;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [measurement, setMeasurement] = useState("");
  const [description, setDesc] = useState("");
  const [files, setFile] = useState("");

  const [state_, setState_] = useState(false);
  useEffect(() => {
    if (!status) window.location = "./login";
    else setState_(true);
  }, [status]);

  const addNewProduct = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", title);
    form.append("category", category);
    form.append("price", price);
    form.append("measurement", measurement);
    form.append("quantity", quantity);
    form.append("desc", description);

    for (var x = 0; x < files.length; x++) {
      form.append("file", files[x]);
    }

    post(url, form)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Sugar customLoading={state_} />
      <div className="container">
        <h3 className="text-center"> Add New Vendor Product</h3>
        <hr />
        <div className="row justify-content-md-center">
          <form action="" onSubmit={addNewProduct}>
            <div className="row">
              <div className="col-4">
                <label htmlFor="title">Enter Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Product Title ..."
                  value={title}
                  onChange={({ target }) => setTitle(target.value)}
                />
              </div>
              <div className="col-4">
                <label htmlFor="title">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Product Price ..."
                  value={price}
                  onChange={({ target }) => setPrice(target.value)}
                />
              </div>
              <div className="col-4">
                <label htmlFor="title">Category</label>
                <select
                  name=""
                  id=""
                  className="form-control"
                  value={category}
                  onChange={({ target }) => setCategory(target.value)}
                  required
                >
                  <option value="">-- Select Category --</option>
                  <option value="milk-creams">Milk&Cream</option>
                  <option value="Fruits">Fruits</option>
                  <option value="vegetables">Vegetables</option>
                  <option value="ocean-foods">Ocean Foods</option>
                  <option value="butter-eggs">Butter & Eggs</option>
                  <option value="fresh-meat">Fresh Meats</option>
                </select>
              </div>
              <div className="col-6">
                <label htmlFor="title">Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  id="title"
                  placeholder="Product Title ..."
                  value={quantity}
                  onChange={({ target }) => setQuantity(target.value)}
                />
              </div>
              <div className="col-6">
                <label htmlFor="title">Measurement:</label>
                <select
                  name=""
                  id=""
                  className="form-control"
                  value={measurement}
                  onChange={({ target }) => setMeasurement(target.value)}
                  required
                >
                  <option value="">-- Select Sales Measurement --</option>
                  <option value="kg">Per Kg</option>
                  <option value="cup">Per Cup</option>
                  <option value="bag">Per Bag</option>
                  <option value="crate">Per Crate</option>
                  <option value="carton">Per Carton</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="title">Product Description:</label>
              <textarea
                name=""
                id=""
                rows="10"
                placeholder="Enter Product Description ... Be descriptive"
                className="form-control"
                value={description}
                onChange={({ target }) => setDesc(target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="">Select Product Images:</label>
              <input
                type="file"
                name=""
                className="form-control"
                multiple
                onChange={({ target }) => {
                  setFile(target.files);
                }}
              />
            </div>
            <button className="btn btn-success btn-lg">Save Item</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
