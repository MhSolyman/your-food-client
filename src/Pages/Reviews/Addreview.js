import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Addreview = () => {
    const {user} = useContext(AuthContext);
  
    
    const [rev, setRev] = useState([])
    console.log(rev)

    useEffect(() => {
        fetch(`http://localhost:5000/Addreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setRev(data))
    }, [user?.email])
    
    return (
        <div>
            <Table>
  <Table.Head>
    <Table.HeadCell>
    service name
    </Table.HeadCell>
    <Table.HeadCell>
    reviews
    </Table.HeadCell>

    <Table.HeadCell>
      Price
    </Table.HeadCell>
    <Table.HeadCell>
      <span className="sr-only">
        Edit
      </span>
    </Table.HeadCell>
  </Table.Head>
  <Table.Body className="divide-y">
    {
        rev.map(a=><Table.Row key={a._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
         {a.serviceName}
        </Table.Cell>
        <Table.Cell>
          {a.reviews}
        </Table.Cell>
      
        <Table.Cell>
          {a.price}
        </Table.Cell>
        <Table.Cell>
          <a
            href="/tables"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Edit
          </a>
        </Table.Cell>
      </Table.Row>)
    }
    
    
  </Table.Body>
</Table>

        </div>
    );
};

export default Addreview;