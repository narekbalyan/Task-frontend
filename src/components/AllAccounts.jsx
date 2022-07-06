import { Table } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../api/api";
import {Link} from 'react-router-dom';
import "antd/dist/antd.css"
 
function AllAccounts() {
    const [accounts, setAccount ] = useState([]);
    useEffect(() => {
        api.getAccounts().then(res => setAccount(res))
    }, [])

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id'
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Created On',
            dataIndex: 'created'
        },
        {
            title: 'Owner',
            dataIndex: 'owner'
        },
        {
            title: 'Action',
            data: 'v',
            render: (a) => {
                return <Link to={`./${a._id}`}>View</Link>
            }
        }
    ]

    return ( <>
    <Table dataSource={accounts} columns={columns} />
    </>)
}

export default AllAccounts;