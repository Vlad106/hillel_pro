const user = {
    name: 'Vlad Levchuk',
    img: '../images/avatar.jpg',
    size: 90,
}

const Profile = () => {
    return(
        <>
        <h1>{user.name}</h1>
        <img
            className="avatar"
            src={user.img}
            alt={'photo  of ' + user.name}
            style={{
                width: user.size,
                height: user.size
            }}
        />
        </>
    );
}

export default Profile;
