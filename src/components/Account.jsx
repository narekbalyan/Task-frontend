import { useState } from "react";
import { api } from "../api/api";
import { useParams } from 'react-router-dom';
import { Descriptions } from "antd";
import { useEffect } from "react";


function Account() {
    const [account, setAccount] = useState({});
    const { id } = useParams();
    useEffect(() => {
        api.getAccountsById(id).then(res => setAccount(res));
    }, [id])
    
    return ( 
    <Descriptions>
        <Descriptions.Item label="ID">{account._id}</Descriptions.Item>
        <Descriptions.Item label="Name">{account.name}</Descriptions.Item>
        <Descriptions.Item label="Created On">{account.created}</Descriptions.Item>
        <Descriptions.Item label="Updated On">{account.updated}</Descriptions.Item>
        <Descriptions.Item label="Owner">{account.owner}</Descriptions.Item>
  </Descriptions>
    )
}

export default Account;