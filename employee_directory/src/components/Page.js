import React, { Component } from 'react';
import './styles.css';
import API from "../utils/API";

class Page extends Component {

  state = {
    search: "",
    results: [],
    error: "",
    // filterStr: " ",
  };

  // When the component mounts, get the employee data and update this.state.results
  componentDidMount() {
    API.search()
      .then(res => this.setState( {results: res.data.results} ))
      .catch(err => console.log(err));
  }

    handleInputChange = event => {  
      this.setState({ search: event.target.value });
    };
  
      // const filteredElements = elements.filter(e => e.includes(filterStr))
  
}

//Supplied
const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  //Supplied
  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  //Supplied
  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  return { items: sortedItems, requestSort, sortConfig };
};

//Supplied
const Table = (props) => {
  // const { items, requestSort, sortConfig } = useSortableData(props.products);  
  const { items, requestSort, sortConfig } = useSortableData(props.products);  
  //how can I bring employees instead of products?
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <caption>Employees</caption>  {/* Changeable */}
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('name')} 
              className={getClassNamesFor('name')} 
            >
              Name  {/* Changeable */}
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('price')} 
              className={getClassNamesFor('price')}
            >
              Price {/* Changeable */}
            </button>
          </th>
          <th>
            <button
              type="button" 
              onClick={() => requestSort('stock')} 
              className={getClassNamesFor('stock')} 
            >
              In Stock
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}> {/* Changeable */}
            <td>{item.name}</td> {/* Changeable */}
            <td>${item.price}</td> {/* Changeable */}
            <td>{item.stock}</td> {/* Changeable */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function App() {
  return (
    <div className="App">
      <Table
        products={[
          { id: 1, name: 'Cheese', price: 4.9, stock: 20 },
          { id: 2, name: 'Milk', price: 1.9, stock: 32 },
          { id: 3, name: 'Yoghurt', price: 2.4, stock: 12 },
          { id: 4, name: 'Heavy Cream', price: 3.9, stock: 9 },
          { id: 5, name: 'Butter', price: 0.9, stock: 99 },
          { id: 6, name: 'Sour Cream ', price: 2.9, stock: 86 },
          { id: 7, name: 'Fancy French Cheese 🇫🇷', price: 99, stock: 12 },
        ]}
      />
    </div>
  );
}
