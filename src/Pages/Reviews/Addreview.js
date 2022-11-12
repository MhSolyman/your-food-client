import { Button, Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
const Addreview = () => {
  const { user } = useContext(AuthContext);


  const [rev, setRev] = useState([])





  useEffect(() => {
    fetch(`http://localhost:5000/Addreviews?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setRev(data))
  }, [user?.email])
  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure delete revew?');
    if (proceed) {
      fetch(`http://localhost:5000/Deletereviews/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.deletedCount > 0) {
            swal("Good job!", "DELETE", "success");
            const remaining = rev.filter(re => re._id !== id);

            setRev(remaining)
          }


        })
    }
  }

  return (
    <div>
      {
        rev.length > 0 ?
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
                rev.map(a => <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
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
                    <div>

                      <Button onClick={() => handleDelete(a._id)} color="failure">
                        DELETE
                      </Button>
                    </div>

                  </Table.Cell>

                  <Table.Cell>
                    <div>
                      <Link to={`/update/${a._id}`}>
                        <Button color="success">
                          EDITE
                        </Button>
                      </Link>


                    </div>


                  </Table.Cell>
                </Table.Row>
                )
              }


            </Table.Body>
          </Table> : <p>No reviews were added</p>}


    </div>
  );
};

export default Addreview;