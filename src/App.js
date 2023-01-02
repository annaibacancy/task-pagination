
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import './App.css'
import DataTable from 'react-data-table-component';
import { columns } from 'config/constant'

function App() {


  const ROW = styled.div`
      display:flex;
      justify-content: space-between;    
  `
  const DETAILSBOX = styled.div`
      width:600px;
      text-align:left;
      margin:0 auto;
      border: 1px solid;
      padding: 10px;
      margin-top: 20px;
      h2{
        border-bottom:1px solid;
      }
  `

  const [postsPerPage] = useState(3);
  const [offset, setOffset] = useState(1);
  const [users, setAllUsers] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [selectedRow, setSelectedRow] = useState({});


  const getAllPosts = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    const data = res.data;
    const slice = data.slice(offset - 1, offset - 1 + postsPerPage)

    setAllUsers(slice)
    setPageCount(Math.ceil(data.length / postsPerPage))
  }

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    setOffset(selectedPage + 1)
  };

  useEffect(() => {
    getAllPosts()
  }, [offset])

  const handleRowClicked = row => {
    setSelectedRow(row)
  };

  console.log("re render");

  return (
    <div className="main-app">

      <DataTable
        onRowClicked={handleRowClicked}
        title="Users"
        columns={columns}
        data={users}
        highlightOnHover
      />


      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"} />

      {Object.keys(selectedRow)?.length > 0 ?
        <DETAILSBOX>
          <h2>Student details</h2>
          <ROW>
            <div>Name</div>
            <div>{selectedRow.name}</div>
          </ROW>
          <ROW>
            <div>Email</div>
            <div>{selectedRow.email}</div>
          </ROW>
          <ROW>
            <div>address</div>
            <div>{selectedRow.address.street}{selectedRow.address.suite}{selectedRow.address.city}{selectedRow.address.zipcode}</div>
          </ROW>
          <ROW>
            <div>Phone</div>
            <div>{selectedRow.phone}</div>
          </ROW>
        </DETAILSBOX> : null}

    </div >
  );
}

export default App;