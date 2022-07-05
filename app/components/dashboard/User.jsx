export default function User() {
  const getAvatar = () => {
    const name = 'aydinvivik';
    let avatar = null;

    if (name.length > 1) {
      avatar = name.substring(0, 2).toUpperCase();
    } else {
      avatar = name.charAt(0).toUpperCase();
    }

    return avatar;
  };

  return (
    <div className="site-user">
      <div className="site-user--avatar"><span>{getAvatar()}</span></div>
      <div className="site-user--detail">
        <span>Welcome,</span>
        <p>aydinvivik</p>
      </div>
    </div>
  );
}