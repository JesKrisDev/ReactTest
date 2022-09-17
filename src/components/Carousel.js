import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel className="bg-black">
      <Carousel.Item>
        <img
          className="d-block w-25"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5d9924b0-13fb-4832-96a9-ab17ae652152/d7wuvt6-6ab3bd1b-e8e0-40fb-8830-ed14ef73dab6.png/v1/fill/w_1024,h_919,q_80,strp/chibi_taddl__shingeki_no_kyojin_attack_on_titan__by_foxiix3_d7wuvt6-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05MTkiLCJwYXRoIjoiXC9mXC81ZDk5MjRiMC0xM2ZiLTQ4MzItOTZhOS1hYjE3YWU2NTIxNTJcL2Q3d3V2dDYtNmFiM2JkMWItZThlMC00MGZiLTg4MzAtZWQxNGVmNzNkYWI2LnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.v7KruaQfG4d19ufdMOq9VKOKkszTUzZ-ChH3CRGx2tA"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25"
          src="https://th.bing.com/th/id/R.3769fde1573444d9e642ce27decb0ffb?rik=V%2fQPtMOpbUf5RA&riu=http%3a%2f%2fs3.zerochan.net%2fJean.Kirschstein.240.1591153.jpg&ehk=Ilh34Pj2xl8ZiWr7LMka9NuXc8fbqI2FM%2fA0O7UjlOk%3d&risl=&pid=ImgRaw&r=0"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25"
          src="https://img00.deviantart.net/350e/i/2015/233/0/a/chibi_hanji_by_sirmimsypompingdon-d96jxnx.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;