import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';

const ViewCustomers = ({ guideId }) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Replace guideId with the actual ID or pass it as a prop
    const id = guideId || 1; // Default to 1 if guideId isn't passed
    axios.get(`/api/users/guide/${id}/customers`)
      .then(response => setCustomers(response.data))
      .catch(error => console.error(error));
  }, [guideId]);

  return (
    <Container>
      <h1>View Customers</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ViewCustomers;
