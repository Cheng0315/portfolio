import '../css/footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className="text-center">&copy; {year} Cheng Vue</div>
  )
}


export default Footer;