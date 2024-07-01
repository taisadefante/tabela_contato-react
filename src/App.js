import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import "./App.css";
import Funcionarios from "./components/img/funcionarios.png";

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("cadastroData")) || [];
    setData(storedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("cadastroData", JSON.stringify(data));
  }, [data]);

  const addData = (formData) => {
    if (editIndex !== null) {
      const updatedData = data.map((item, index) =>
        index === editIndex ? formData : item
      );
      setData(updatedData);
      setEditIndex(null);
    } else {
      setData([...data, formData]);
    }
  };

  const deleteData = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  const editData = (index) => {
    setEditIndex(index);
  };

  const filteredData = data
    .filter((item) =>
      Object.values(item).some((val) =>
        val.toUpperCase().includes(search.toUpperCase())
      )
    )
    .sort((a, b) => {
      const isReversed = sortOrder === "asc" ? 1 : -1;
      return isReversed * a.nome.localeCompare(b.nome);
    });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="App">
      <div className="titulo">
        <img src={Funcionarios} />

        <h1>Todos os Contatos </h1>
      </div>
      <Search setSearch={setSearch} />
      <Form
        addData={addData}
        data={editIndex !== null ? data[editIndex] : null}
      />
      <Table
        data={currentData}
        deleteData={deleteData}
        editData={editData}
        toggleSortOrder={toggleSortOrder}
      />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;
