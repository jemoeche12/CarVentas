import Cart from "./CartWidget"


const NavBar = () => {
    return (
      <>
        <nav className="navBar">
            <img className="log" src="src/assets/icons/car.png" alt="" />
            <ul className="items-navBar">
                <li><a>Comprar</a></li>
                <li><a>Vender</a></li>
                <li><a>Guardados</a></li>
            </ul>
            <Cart />
        </nav>
        <style>
          {
            `
            .navBar{
              width: 1280px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin: 0 10%;     
              }
            .log{
              width: 60px;
            }
            .items-navBar{
                display: flex;
                gap: 40px;
              }
            li{
              list-style: none;
              text-transform: uppercase;

            }
            a{
              text-decoration: none;
              color: white;
              font-size: 20px;
            }
            
            `
          }
        </style>
      </>  
    )
}

export default NavBar