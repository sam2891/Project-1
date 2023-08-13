import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/card.css";
function Cardreact() {
  return (
    <div className="Cards">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="LionT-Shirt"
          src="https://m.media-amazon.com/images/I/B1F9XqluwtS._CLa%7C2140%2C2000%7CA1fbNkqSUGL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX342_.png"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="LionT-Shirt"
          src="https://m.media-amazon.com/images/I/B1F9XqluwtS._CLa%7C2140%2C2000%7CA1fbNkqSUGL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX342_.png"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="LionT-Shirt"
          src="https://m.media-amazon.com/images/I/B1F9XqluwtS._CLa%7C2140%2C2000%7CA1fbNkqSUGL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX342_.png"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cardreact;
