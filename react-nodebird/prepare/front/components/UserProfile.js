import React, { useCallback } from 'react';
import { Avatar, Button, Card } from 'antd';

const UserProfile = ({ setIsLoggedIn }) => {
    const onLogOut = useCallback(() => {
        setIsLoggedIn(false);
    }, []);
    return (
        <Card
        actions={[
            <div key="twit">짹짹<br/>0</div>,
            <div key="followings">팔로잉<br/>0</div>,
            <div key="follower">팔로워<br/>0</div>
        ]}>
            
            <Card.Meta
                avatar={<Avatar>CJ</Avatar>}
                title="ChanJin"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    )
 
};

export default UserProfile;