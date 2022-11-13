import { Avatar, Table } from 'flowbite-react';
import React from 'react';


const Reviws = ({ re }) => {

    return (

        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">



            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <Avatar
                    img={re.photo}
                    rounded={true}
                />
            </Table.Cell>
            <Table.Cell>
                {re.reviews
                }

            </Table.Cell>
            <Table.Cell>
                {re.email}
            </Table.Cell>
            <Table.Cell>
                {re.serviceName}
            </Table.Cell><Table.Cell>
                {re.price}
            </Table.Cell>
            <Table.Cell>
                {re.coustomerNamw
                }
            </Table.Cell>
            <Table.Cell>
                
            </Table.Cell>
        </Table.Row>


    );
};

export default Reviws;