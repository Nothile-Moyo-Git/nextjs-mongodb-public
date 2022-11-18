function Card(props) {

  return (
      <div className={`card ${props.className} ${props.showCard}`}>
        {props.children}
      </div>
    );
}

export default Card;
