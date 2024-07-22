import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const ProductList = () => {
  const [data, setdata] = useState([]);
  const [category, setcategory] = useState(null);
  const [order, setorder] = useState(null);
  const [search, setsearch] = useState(null);
  const [page, setpage] = useState(1);
  const [total, settotal] = useState(0);

  function FetchData() {
    axios
      .get(" http://localhost:8000/posts", {
        params: {
          _page: page,
          _limit: 6,
          category: category,
          _sort: "price",
          _order: order,
          q: search,
        },
      })
      .then((res) => {
        setdata(res.data);
        settotal(res.headers["x-total-count"]);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    FetchData();
  }, [order, category, search, page]);
  function DataDelete(id) {
    axios
      .delete(`http://localhost:8000/posts/${id}`)
      .then((res) => {
        FetchData();
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <div style={{ textAlign: "right" }}>
        <Link to={"/AddProduct"}>
          {" "}
          <button className="addbtn">Add Product</button>
        </Link>
      </div>
      <div
        className="filter"
        style={{
          display: "flex",
          position: "relative",
          width: "80%",
          margin: " 15px auto",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="cate">
          <select name="" id="" onChange={(e) => setcategory(e.target.value)}>
            <option value="">Select Your Category</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setsearch(e.target.value)}
            name=""
            id=""
          />
        </div>
        <div>
          <button
            className="order"
            style={{ margin: "10px", outline: "none" }}
            onClick={() => setorder("asc")}
          >
            Low to High
          </button>
          <button
            className="order"
            style={{ marginRight: "10px", outline: "none" }}
            onClick={() => setorder("desc")}
          >
            High to Low
          </button>
        </div>
      </div>

      <div
        className="Products"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          marginTop: "20px",
        }}
      >
        {data.map((el) => (
          <div key={el.id} className="card" style={{ width: "18rem" }}>
            <Link to={`/ProductDetails/${el.id}`}>
              <img
                src={el.image}
                className="card-img-top"
                alt="..."
                height={250}
                width={250}
              />
            </Link>
            <div className="card-body">
              <h5 className="card-title">{el.title}</h5>
              <h4>Price :{el.price}</h4>
              <div className="btns">
                <button className="btn btn-primary">
                  <Link
                    style={{ color: "#111827" }}
                    to={`/EditProduct/${el.id}`}
                  >
                    Edit
                  </Link>
                </button>
                <button
                  className="btn btn-dark"
                  onClick={() => DataDelete(el.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button
          className="pages"
          disabled={page === 1}
          onClick={() => setpage(page - 1)}
        >
          Prev
        </button>
        <span style={{ margin: "20px" }}>{page}</span>
        <button className="pages" onClick={() => setpage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
