export default function Copyright() {
  const getToday = () => {
    let today = new Date()
    const yyyy = today.getFullYear()

    today = `${yyyy}`

    return today
  }

  return (
    <div className="site-copyright">
      <p>Copyright @ {getToday()} | All Rights Reserved.</p>
    </div>
  );
}